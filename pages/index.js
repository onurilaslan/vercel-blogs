import Parser from 'rss-parser'
import { format } from 'date-fns'

export const getStaticProps = async () => {
  let parser = new Parser()
  let feed = await parser.parseURL('https://blog.onurilaslan.com/feed.xml')
  console.log(feed)
  return {
    props: {
      items: feed.items
    },
    revalidate: 1
  }
}

const App = ({ items }) => {
  return (<>
    <div className="w-full bg-white dark:bg-slate-900 border-b dark:border-slate-500/50">
        <div className="max-w-[1080px] mx-auto py-4 dark:text-slate-200 flex items-center justify-between">
            <h1 className="text-3xl font-black select-none dark:text-slate-300 cursor-pointer">Onurİlaslan</h1>
            <div className="flex items-center space-x-10">
                <ul className="flex space-x-6">
                    <li className="text-md font-semibold select-none"><a href="#" className="dark:text-slate-300 p-1 px-2">Hakkımda</a></li>
                    <li className="text-md font-semibold select-none"><a href="#" className="dark:text-slate-300 p-1 px-2">Blog</a></li>
                </ul>
                <div className="dark:fill-white select-none dark:bg-slate-800/50 p-2 rounded-md">
                    <svg id="darkmode" className="w-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"/></svg>
                </div>
            </div>
        </div>
    </div>
    <div className="max-w-[1080px] mx-auto">
        <div className="p-4 px-8 grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-4">
            {items.length > 0 ?             
                <div className="wrapper dark:bg-slate-900 antialiased dark:text-gray-900">
                    <img data-src={items[0].enclosure.url} className="lazy w-full object-cover object-center rounded-lg shadow-md" />
                    <div className="relative px-4 -mt-16 transition duration-150 ease-out hover:scale-110 select-none cursor-pointer">
                        <a href={items[0].guid}>
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
                                    <span className="text-slate-400 text-md font-semibold">2 Dakika okuma süresi</span>
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
                                        <a href={item.guid}>
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
                <div key={item.guid} className="wrapper dark:bg-slate-900 antialiased dark:text-gray-900">
                    <img data-src={item.enclosure.url} className="lazy w-full object-cover object-center rounded-lg shadow-md" />
                    <div className="relative px-4 -mt-16 transition duration-150 ease-out hover:scale-110 select-none cursor-pointer">
                        <a href={item.guid}>
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
