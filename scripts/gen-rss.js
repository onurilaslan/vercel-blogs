const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')
const readTimeEstimate = require('./readTime')

async function generate() {
  const feed = new RSS({
    title: 'BLOG',
    site_url: 'https://www.onurilaslan.com',
    feed_url: 'https://www.onurilaslan.com/feed.xml'
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'pages', 'articles'))

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return

      const content = await fs.readFile(
        path.join(__dirname, '..', 'pages', 'articles', name)
      )
      const frontmatter = matter(content)

      const { duration } = readTimeEstimate(frontmatter.content, 275, 12, 500, ['img', 'Image']);

      feed.item({
        title: frontmatter.data.title,
        url: '/articles/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        author: frontmatter.data.author,
        enclosure: {'url': frontmatter.data.media},
        custom_elements: [
          { 'read_time': duration },
        ]
      })
    })
  )

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
