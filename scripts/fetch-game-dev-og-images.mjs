#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const PAGE_PATH = resolve("src/pages/game-dev.md");
const OUTPUT_PATH = resolve("src/data/game-dev-og-images.json");
const ICON_OUTPUT_PATH = resolve("src/data/game-dev-site-icons.json");
const USER_AGENT = "max-arias-web game-dev OG image resolver/1.0";
const REQUEST_TIMEOUT_MS = 12_000;
const CONCURRENCY = 4;

function resourceUrls(markdown) {
  const urls = new Set();
  const markdownLinks = /\]\((https?:\/\/[^\s)]+)[^)]*\)/gi;

  for (const match of markdown.matchAll(markdownLinks)) {
    try {
      const url = new URL(match[1]);
      if (url.protocol === "https:") {
        urls.add(url.href);
      }
    } catch {
      // Ignore malformed links in the editable Markdown.
    }
  }

  return [...urls].sort();
}

function htmlMetaContent(html, preferredProperty) {
  const metaTags = /<meta\b[^>]*>/gi;

  for (const tagMatch of html.matchAll(metaTags)) {
    const tag = tagMatch[0];
    const property = tag.match(/\b(?:property|name)\s*=\s*["']([^"']+)["']/i);
    if (property?.[1].toLowerCase() !== preferredProperty) continue;

    const content = tag.match(/\bcontent\s*=\s*["']([^"']*)["']/i);
    if (content?.[1]) return decodeHtmlEntities(content[1].trim());
  }

  return null;
}

function htmlIconUrls(html, baseUrl) {
  const icons = { "apple-touch-icon": [], icon: [] };
  const linkTags = /<link\b[^>]*>/gi;

  for (const tagMatch of html.matchAll(linkTags)) {
    const tag = tagMatch[0];
    const rel = tag.match(/\brel\s*=\s*["']([^"']*)["']/i)?.[1];
    const href = tag.match(/\bhref\s*=\s*["']([^"']*)["']/i)?.[1];
    if (!rel || !href) continue;

    const relTokens = rel.toLowerCase().split(/\s+/);
    const kind = relTokens.includes("apple-touch-icon")
      ? "apple-touch-icon"
      : relTokens.includes("icon")
        ? "icon"
        : null;
    if (kind) icons[kind].push(href);
  }

  for (const kind of ["apple-touch-icon", "icon"]) {
    for (const href of icons[kind]) {
      try {
        const iconUrl = new URL(decodeHtmlEntities(href.trim()), baseUrl);
        if (iconUrl.protocol === "https:") return iconUrl.href;
      } catch {
        // Ignore malformed icon declarations.
      }
    }
  }

  try {
    const finalUrl = new URL(baseUrl);
    if (finalUrl.protocol === "https:") return new URL("/favicon.ico", finalUrl).href;
  } catch {
    // Ignore an unusable response URL.
  }

  return null;
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#(x[\da-f]+|\d+);?/gi, (_, code) => {
      const number = code[0].toLowerCase() === "x" ? parseInt(code.slice(1), 16) : Number(code);
      return Number.isFinite(number) ? String.fromCodePoint(number) : _;
    });
}

async function resolveResource(pageUrl) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(pageUrl, {
      headers: { "user-agent": USER_AGENT, accept: "text/html,application/xhtml+xml" },
      redirect: "follow",
      signal: controller.signal,
    });
    if (!response.ok) return { image: null, icon: null };

    const html = await response.text();
    for (const property of ["og:image", "twitter:image"]) {
      const image = htmlMetaContent(html, property);
      if (!image) continue;

      try {
        const imageUrl = new URL(image, response.url);
        if (imageUrl.protocol === "https:") return { image: imageUrl.href, icon: null };
      } catch {
        // Try the next metadata or icon fallback.
      }
    }

    return { image: null, icon: htmlIconUrls(html, response.url) };
  } catch {
    return { image: null, icon: null };
  } finally {
    clearTimeout(timeout);
  }
}

async function main() {
  const markdown = await readFile(PAGE_PATH, "utf8");
  const pages = resourceUrls(markdown);
  const resolved = {};
  const icons = {};
  const unresolved = [];
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < pages.length) {
      const pageUrl = pages[nextIndex++];
       const result = await resolveResource(pageUrl);
       if (result.image) resolved[pageUrl] = result.image;
       else if (result.icon) icons[pageUrl] = result.icon;
       else unresolved.push(pageUrl);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, pages.length) }, () => worker()),
  );

  const sortedResolved = Object.fromEntries(
    Object.entries(resolved).sort(([a], [b]) => a.localeCompare(b)),
  );
  const sortedIcons = Object.fromEntries(
    Object.entries(icons).sort(([a], [b]) => a.localeCompare(b)),
  );
  await writeFile(OUTPUT_PATH, `${JSON.stringify(sortedResolved, null, 2)}\n`);
  await writeFile(ICON_OUTPUT_PATH, `${JSON.stringify(sortedIcons, null, 2)}\n`);

  console.log(
    `Game-dev resolver: ${Object.keys(sortedResolved).length} OG images, ${Object.keys(sortedIcons).length} icon fallbacks, ${unresolved.length} unresolved (${pages.length} unique URLs).`,
  );
  if (unresolved.length) console.log(`Unresolved sources:\n${unresolved.sort().join("\n")}`);
}

main().catch((error) => {
  console.error(`Unable to resolve game-dev OG images: ${error.message}`);
  process.exitCode = 1;
});
