import Parser from 'rss-parser'
import useRouter from 'next/router';

const Post = (props) => {
  console.log(props);
  return (<>
        {props && (<>
            <h1 className='dark:text-slate-100'>{props.title}</h1>
            <p className='dark:text-slate-100'>{props.content}</p>
        </>)}
  </>)
}

export async function getStaticProps(context) {
    let parser = new Parser()
    let feed = await parser.parseURL('https://www.onurilaslan.com/feed.xml');
    console.log(feed.items.filter((feed) => feed.guid.split('/')[2] == context.params.slug)[0])
    return {
      props: feed.items.filter((feed) => feed.guid.split('/')[2] == context.params.slug)[0]
    }
  }

export async function getStaticPaths() {
    let parser = new Parser()
    let feed = await parser.parseURL('https://www.onurilaslan.com/feed.xml');
    let paths = feed.items.map((f) => ({
        params: { slug: f.guid.split('/')[2] }
    }));
    console.log(paths);
    return {
        paths: [{
            params: { slug: 'duyuru', }
        }],
        fallback: false,
    }
}


export default Post