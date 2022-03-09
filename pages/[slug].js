import path from "path";
import * as fs from "fs";
import showdown from "showdown";
import matter from "gray-matter";
import Header from '../components/Header'
import hljs from "highlight.js";
import {useEffect} from "react";

const Post = ({ content, data }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (<>
        <Header />
        <div className='flex'>
          <div className='w-[880px] max-w-[880px] mx-auto border-x-2 dark:border-slate-300 p-4 dark:text-slate-300 space-y-6'>
            <div className="py-4 flex items-center space-x-4">
              <img className="lazy w-16 h-16 object-cover border-2 dark:border-slate-300 rounded-full" data-src="https://media.discordapp.net/attachments/647859250336628737/950500499294130236/unknown_1.png"/>
              <div className="flex flex-col items-start">
                <h4 className="text-xl">{data.author}</h4>
                <span className="text-xs dark:text-slate-300/75 font-bold">{data.date} · </span>
              </div>
            </div>
            <h1 className='text-2xl font-bold'>{data.title}</h1>
            <h3 className='text-xl dark:text-slate-400'>{data.description}</h3>
            <div className='py-4'>
              <img data-src={data.media} className="lazy w-full object-cover object-center rounded-lg shadow-md" />
              <small><a href={data.media}>Open original</a></small>
            </div>
            <div className="prose" dangerouslySetInnerHTML={{__html: content}} />
          </div>
          <div className='hidden md:block w-[400px] max-w-[400px] mx-auto'>
          </div>
        </div>
  </>)
}

export async function getStaticProps(context) {
  // fs.readFileSync(path.join('pages', 'articles', context.params.slug+'.md'))
  showdown.setOption('tables', true)
  const converter = new showdown.Converter();
  const text = fs.readFileSync(path.join('pages', 'articles', context.params.slug+'.md'), 'utf-8');
  const fm = matter(text);
  return {
    props: { content: converter.makeHtml(fm.content), data: fm.data },
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