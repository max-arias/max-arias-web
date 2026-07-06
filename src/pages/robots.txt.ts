export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://www.max-arias.com/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
