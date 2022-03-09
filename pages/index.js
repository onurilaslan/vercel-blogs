import matter from "gray-matter";
import * as fs from "fs";
import path from "path";
import Header from '../components/Header'
// import { format } from 'date-fns'


export async function getStaticProps() {
    const posts = fs.readdirSync(path.join('pages', 'articles'))
        .map(md => ( { link: '/'+md.replace('.md', ''), ...matter(fs.readFileSync(path.join('pages', 'articles', md)), 'utf-8').data } ))
        .filter((post) => 'timestamp' in post === true)
        .sort((a, b) => {
        return b.timestamp - a.timestamp;
        }); 
    return {
        props: { posts }
    }
}

const App = ({ posts }) => {
    return (<>
        <Header />
        <div className="max-w-[1080px] mx-auto">
            <div className="p-4 px-8 grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-4">
                {posts.length > 0 ?             
                    <div className="wrapper dark:bg-slate-900 antialiased dark:text-gray-900">
                        <img data-src={posts[0].media} className="lazy w-full object-cover object-center rounded-lg shadow-md" />
                        <div className="relative px-4 -mt-16 transition duration-150 ease-out hover:scale-110 select-none cursor-pointer">
                            <a href={posts[0].link}>
                                <div className="dark:bg-slate-800 dark:text-slate-300 bg-white p-6 rounded-lg shadow-lg">
                                    <div className="flex items-baseline">
                                        <span className="bg-slate-200 dark:text-slate-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                            Category
                                        </span>
                                    </div>
                                    <h4 className="mt-1 text-xl font-bold uppercase leading-tight truncate">{posts[0].title}</h4>
                                    <div className="mt-1 font-semibold">
                                        {posts[0].description}
                                    </div>
                                    <div className="mt-4">
                                        <span className="text-slate-400 text-md font-semibold"></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                : <></>}
                <div>
                    <div className="grid grid-cols-1 grid-rows-3 gap-2">
                        {posts.map((item, index) => {
                            if(index < 4 && index >= 1) {
                                return (
                                    <div className="wrapper dark:bg-slate-900 antialiased dark:text-gray-900">
                                        <div className="relative px-4 transition duration-150 ease-out hover:scale-110 select-none cursor-pointer">
                                            <a href={item.link}>
                                                <div className="dark:bg-slate-800 dark:text-slate-300 bg-white p-6 rounded-lg shadow-lg">
                                                    <div className="flex items-baseline">
                                                        <span className="bg-slate-200 dark:text-slate-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                                            Category
                                                        </span>
                                                    </div>
                                                    <h4 className="mt-1 text-xl font-bold uppercase leading-tight truncate">{item.title}</h4>
                                                    <div className="mt-1 font-semibold">
                                                        {item.description}
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
                {posts.length > 0 && posts.map((item, index) => {
                    if(index > 0)  {
                        return (
                            <div key={item.link} className="wrapper dark:bg-slate-900 antialiased dark:text-gray-900">
                                <img data-src={item.media} className="lazy w-full object-cover object-center rounded-lg shadow-md" />
                                <div className="relative px-4 -mt-16 transition duration-150 ease-out hover:scale-110 select-none cursor-pointer">
                                    <a href={item.link}>
                                        <div className="dark:bg-slate-800 dark:text-slate-300 bg-white p-6 rounded-lg shadow-lg">
                                            <div className="flex items-baseline">
                                                <span className="bg-slate-200 dark:text-slate-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                                    Category
                                                </span>
                                            </div>
                                            <h4 className="mt-1 text-xl font-bold uppercase leading-tight truncate">{item.title}</h4>
                                            <div className="mt-1 font-semibold">
                                                {item.description}
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
    </>)
}

export default App
