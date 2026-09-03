const content = `# Maximiliano Arias

Maximiliano Arias is a senior frontend and frontend platform engineer with 15+ years of experience building web products, browser extensions, mobile experiences, and shared UI systems.

Demand.io / Product.ai (since September 2021): Staff Front-End Engineer / Frontend Fortress Lead across SimplyCodes, Dealspotr, Knoji, and Product.ai. Work includes SimplyCodes modernization; a WXT extension architecture reset with multiplatform releases, Safari, analytics, and Jenkins-to-GitHub Actions; cross-product design systems and shared frontend infrastructure; CMS and Git-based publishing with Cloudflare Workers/KV/R2 delivery; Product.ai Cloudflare Worker site, Research Hub, recruiting, and schema JSON-LD; AI chat, trust, evidence, extension-connected shopping, and retrieval prototypes; and synthetic-monitoring readiness, SEO safety, operational, and performance fixes.

Truelogic engagements included LeafLink, Minted, SoulCycle, and Evernote. LeafLink had roughly 30% bundle and image payload reductions. Minted included Lighthouse/Puppeteer tooling for synthetic performance metrics.

Homepage: https://maxarias.com/
Resume (external Google Drive CV): https://drive.google.com/file/d/1WWMIGpjEJwXdqxdFY1JwCvS2OJ0LZy9W/view?usp=sharing
Game Dev Resources: https://maxarias.com/game-dev — a curated, editable list of game-development assets, audio, references, and tools.

This file is optional guidance for language models and other automated readers. It does not affect search rankings.
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
