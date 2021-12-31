import { request } from '../lib/datocms'

const Sitemap = () => {}

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: 'http://localhost:3000',
    production: 'https://www.sirensoundfactory.com',
  }[process.env.VERCEL_ENV]

  const data = await request({
    query: `query Page {
      allPages(first: 100, filter: {slug: {neq: null}}) {
        slug
      }
    }`,
  })
  const paths = data.allPages.map((p) => `${baseUrl}/${p.slug}`)
  paths.unshift(`${baseUrl}/`)

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${paths
      .map((url) => {
        return `
          <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>
        `
      })
      .join('')}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}
export default Sitemap
