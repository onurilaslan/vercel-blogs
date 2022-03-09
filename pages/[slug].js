import path from "path";
import * as fs from "fs";
import showdown from "showdown";
import matter from "gray-matter";
import Header from '../components/Header'
import Footer from '../components/Footer'
import hljs from "highlight.js";
import {useEffect} from "react";

const Post = ({ posts, content, data }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (<>
        <Header />
        <div className='flex min-h-screen'>
          <div className="flex flex-col mx-auto">
            <div className="dark:fill-slate-300 pt-4 pb-2">
              <svg id='returnToHome' className="w-12 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 273.7 497.7 288 480 288H160.1l0 72c0 9.547-5.66 18.19-14.42 22c-8.754 3.812-18.95 2.077-25.94-4.407l-112.1-104c-10.24-9.5-10.24-25.69 0-35.19l112.1-104c6.992-6.484 17.18-8.218 25.94-4.406C154.4 133.8 160.1 142.5 160.1 151.1L160.1 224H480C497.7 224 512 238.3 512 256z"/></svg>
            </div>
            <div className="grid grid-cols-1">
              <div className="flex">
                <div className='sm:w-[500px] md:w-[700px] xl:w-[880px] my-6 dark:text-slate-300 space-y-6 dark:bg-slate-800 rounded-md'>
                  <div className="p-2 px-4 shadow-xl">
                    <div className="py-4 flex items-center space-x-4">
                      <img className="lazy w-16 h-16 object-cover border-2 dark:border-slate-300 rounded-full" data-src="https://media.discordapp.net/attachments/647859250336628737/950500499294130236/unknown_1.png"/>
                      <div className="flex flex-col items-start">
                        <h4 className="text-xl">{data.author}</h4>
                        <span className="text-xs dark:text-slate-300/75 font-bold">{data.date} · </span>
                      </div>
                    </div>
                    <h1 className='text-2xl font-bold'>{data.title}</h1>
                    <h3 className='text-xl dark:text-slate-400'>{data.description}</h3>
                    <div className='flex flex-col py-4'>
                      <img data-src={data.media} className="lazy w-full object-cover object-top rounded-lg shadow-md max-h-[350px]" />
                      <small><a href={data.media}>Open original</a></small>
                    </div>
                    <div className="grid grid-cols-1">
                      <div className="prose" dangerouslySetInnerHTML={{__html: content}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden xl:block w-[400px] max-w-[400px] mx-auto'>
            <div className="grid justify-center space-y-4 p-6 grid-cols-1">
              {posts.map((post, index) => {
                if(index < 5) {
                  return (
                    <div key={index} className="dark:bg-slate-900 antialiased dark:text-gray-900 w-full">
                        <div className="relative px-4 transition duration-150 ease-out hover:scale-110 select-none cursor-pointer">
                            <a href={post.link}>
                                <div className="dark:bg-slate-800 dark:text-slate-300 bg-white p-6 rounded-lg shadow-lg">
                                    <div className="flex items-baseline">
                                        <span className="bg-slate-200 dark:text-slate-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                            Category
                                        </span>
                                    </div>
                                    <h4 className="mt-1 text-xl font-bold uppercase leading-tight truncate">{post.title}</h4>
                                    <div className="mt-1 font-semibold">
                                      {post.description}
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
        <Footer />
  </>)
}





export async function getStaticProps(context) {
  const posts = fs.readdirSync(path.join('pages', 'articles'))
    .map(md => ( { link: '/'+md.replace('.md', ''), ...matter(fs.readFileSync(path.join('pages', 'articles', md)), 'utf-8').data } ))
    .filter((post) => 'timestamp' in post === true)
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    }); 
  // fs.readFileSync(path.join('pages', 'articles', context.params.slug+'.md'))
  showdown.setOption('tables', true)
  const converter = new showdown.Converter();
  const text = fs.readFileSync(path.join('pages', 'articles', context.params.slug+'.md'), 'utf-8');
  const fm = matter(text);
  return {
    props: { posts, content: converter.makeHtml(fm.content), data: fm.data },
  }
}

export async function getStaticPaths() {
    const posts = await fs.readdirSync(path.join('pages', 'articles'))
    let paths = posts.map((post) => ({
      params: { slug: post.replace('.md', '') },
    }))
    return {
        paths,
        fallback: false,
    }
}


export default Post