import Parser from 'rss-parser'
import Header from '../components/Header'
import { format } from 'date-fns'

export const getStaticProps = async () => {
  let parser = new Parser()
  let feed = await parser.parseURL('https://www.onurilaslan.com/feed.xml')
  return {
    props: {
      items: feed.items
    },
    revalidate: 1
  }
}

const App = ({ items }) => {
  return (<>
    <Header />
    <div className="max-w-[1080px] mx-auto">
        <div className="p-4 px-8 grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-4">
            {items.length > 0 ?             
                <div className="wrapper dark:bg-slate-900 antialiased dark:text-gray-900">
                    <img data-src={items[0].enclosure.url} className="lazy w-full object-cover object-center rounded-lg shadow-md" />
                    <div className="relative px-4 -mt-16 transition duration-150 ease-out hover:scale-110 select-none cursor-pointer">
                        <a href={items[0].guid.split('/')[2]}>
                            <div className="dark:bg-slate-800 dark:text-slate-300 bg-white p-6 rounded-lg shadow-lg">
                                <div className="flex items-baseline">
                                    <span className="bg-slate-200 dark:text-slate-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                        Category
                                    </span>
                                </div>
                                <h4 className="mt-1 text-xl font-bold uppercase leading-tight truncate">{items[0].title}</h4>
                                <div className="mt-1 font-semibold">
                                    {items[0].contentSnippet}
                                </div>
                                <div className="mt-4">
                                    <span className="text-slate-400 text-md font-semibold">{items[0].custom_items?.read_time}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            : <></>}
            <div>
                <div className="grid grid-cols-1 grid-rows-3 gap-2">
                    {items.map((item, index) => {
                        if(index < 3) {
                            return (
                                <div className="wrapper dark:bg-slate-900 antialiased dark:text-gray-900">
                                    <div className="relative px-4 transition duration-150 ease-out hover:scale-110 select-none cursor-pointer">
                                        <a href={item.guid.split('/')[2]}>
                                            <div className="dark:bg-slate-800 dark:text-slate-300 bg-white p-6 rounded-lg shadow-lg">
                                                <div className="flex items-baseline">
                                                    <span className="bg-slate-200 dark:text-slate-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                                        Category
                                                    </span>
                                                </div>
                                                <h4 className="mt-1 text-xl font-bold uppercase leading-tight truncate">{item.title}</h4>
                                                <div className="mt-1 font-semibold">
                                                    {item.contentSnippet}
                                                </div>
                                                <div className="mt-4">
                                                    <span className="text-slate-400 text-md font-semibold">2 Dakika okuma süresi</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    </div>
    <div className="max-w-[1080px] mx-auto">
        <div className="p-4 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {items.length > 0 && items.map((item) => (
                <div key={item.guid.split('/')[2]} className="wrapper dark:bg-slate-900 antialiased dark:text-gray-900">
                    <img data-src={item.enclosure.url} className="lazy w-full object-cover object-center rounded-lg shadow-md" />
                    <div className="relative px-4 -mt-16 transition duration-150 ease-out hover:scale-110 select-none cursor-pointer">
                        <a href={item.guid.split('/')[2]}>
                            <div className="dark:bg-slate-800 dark:text-slate-300 bg-white p-6 rounded-lg shadow-lg">
                                <div className="flex items-baseline">
                                    <span className="bg-slate-200 dark:text-slate-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                        Category
                                    </span>
                                </div>
                                <h4 className="mt-1 text-xl font-bold uppercase leading-tight truncate">{item.title}</h4>
                                <div className="mt-1 font-semibold">
                                    {item.contentSnippet}
                                </div>
                                <div className="mt-4">
                                    <span className="text-slate-400 text-md font-semibold">2 Dakika okuma süresi</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  </>)
}

export default App
