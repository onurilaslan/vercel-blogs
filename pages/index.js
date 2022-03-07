import Parser from 'rss-parser'
import { format } from 'date-fns'

export const getStaticProps = async () => {
  let parser = new Parser()
  let feed = await parser.parseURL('https://blog.onurilaslan.com/feed.xml')
  return {
    props: {
      items: feed.items
    },
    revalidate: 1
  }
}

const App = ({ items }) => {
  return (
    <>
        {/* {items.map((item) => (
            // [guid, title, contentSnippet, link, creator, format(new Date(item.isoDate), 'PPP')]
            <></>
        ))} */}
        <div className='w-full h-full bg-gradient-to-bl from-slate-900 to-slate-800'>

        </div>
    </>
  )
}

export default App
