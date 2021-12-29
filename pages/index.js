import Parser from "rss-parser";
import Link from "next/link";
import { format } from "date-fns";

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
    return (<><h1>Openduct.net Blog</h1><br/><h2>Articles:</h2><dl>{items.map((item) => (<dd key={item.guid}><fieldset><legend><h3>{item.title}</h3></legend><div><strong>{item.contentSnippet}</strong></div><br /><h3><Link href={item.link} >#Read</Link></h3><h4>-{item.creator}</h4><p><i>{format(new Date(item.isoDate), "PPP")}</i></p></fieldset></dd>))}</dl></>)
}

export default App;