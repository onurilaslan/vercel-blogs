import Parser from "rss-parser";


export async function getFeed() {
  let parser = new Parser();

  let feed = await parser.parseURL("https://blog.openduct.net/feed.xml");

  return feed;
}
