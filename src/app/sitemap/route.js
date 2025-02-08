export async function GET() {
  console.log("Generating Sitemap..."); // Debugging

  const baseUrl = "https://www.scrapworker.com";

  // Define your static pages
  const staticPages = ["/", "/scrap-metal", "/scrap-plastic", "/scrap-paper"];

  // Generate sitemap entries
  const pages = staticPages
    .map((page) => {
      return `
      <url>
        <loc>${baseUrl}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1</priority>
      </url>`;
    })
    .join("\n");

  // Generate the full XML structure
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
