import Parser from "rss-parser";
import Link from "next/link";

export const getStaticProps = async () => {
  let parser = new Parser();
  let feed = await parser.parseURL("https://blog.openduct.net/feed.xml");
  return {
      props: {
          items: feed.items,
      },
      revalidate: 1,
  }
}

const App = ({ items }) => {
    return (<ul>{items.map((item) => (<li key={item.guid}><div>{item.creator}<p>{item.pubDate}</p></div><Link href={item.link} >{item.title}</Link><div>{item.contentSnippet}</div></li>))}</ul>)
}

export default App;