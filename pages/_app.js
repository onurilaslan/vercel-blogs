import Head from 'next/head'
import 'highlight.js/styles/github-dark.css';
import '../styles/globals.css'
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
