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
        <div className='w-full h-full bg-gradient-to-bl from-slate-100 to-slate-300'>
            <div className='w-full bg-slate-200 pt-2 p-3'>
                <h4 className='text-slate-800 text-xl font-medium'>Onurİlaslan</h4>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className='h-1/2 bg-slate-400'>
                <div className='h-full w-1/2 bg-slate-500'>
                    <h1 className='font-bold text-xl'>Onur blog</h1>
                </div>
                <div className='h-full w-1/2'>

                </div>
            </div>
        </div>
    </>
  )
}

export default App
