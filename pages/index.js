import Parser from 'rss-parser'
import { format } from 'date-fns'

export const getStaticProps = async () => {
  let parser = new Parser()
  let feed = await parser.parseURL('https://blog.onurilaslan.com/feed.xml')
  return {
    props: {
      items: feed.items
    },
    revalidate: 1
  }
}

const App = ({ items }) => {
  return (
    <>
        {items.length > 0 ?
            <div>
                <div className='flex items-center justify-between w-full bg-white pt-2 p-3 sticky top-0 z-20'>
                    <h4 className='text-slate-800 text-[2rem] font-medium'>Onurİlaslan</h4>
                    <div className='block lg:hidden'>
                        <svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
                    </div>
                    <div className='hidden lg:flex'>
                        <ul className='list-none'>
                            <li><a href='#' className='text-slate-600 p-3 text-[1.2rem] before:border-2 before:mr-2 before:border-slate-700'>About</a></li>
                        </ul>
                    </div>
                </div>
                <div className='max-w-[1080px] mx-auto w-full h-full flex flex-col'>
                    <div className=''>
                        <div className='flex lg:space-x-12 lg:my-6 px-4'>
                            <div className='flex flex-col w-full lg:w-2/3 min-h-[320px] md:min-h-[400px] sm:min-h-full lg:min-h-full self-center'>
                                <a href={items[0].guid}>
                                    <div className='bg-white flex flex-col shadow-md'>
                                        <div className='bg-slate-900 min-h-[120px] md:min-h-[200px] relative'>
                                            <img className='absolute inset-0 object-cover h-full w-full' src='https://picsum.photos/800/400?random=4' />
                                        </div>
                                        <div className=''>
                                            <h1 className='p-2 text-[1.3rem] md:text-[1.6rem] w-full'>{items[0].title}</h1>
                                            <div className='flex'>
                                                <p className='p-2 text-[.75rem] md:text-[1.1rem]'>{items[0].contentSnippet}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='hidden lg:flex w-1/3'>
                                <div className='w-full h-full flex flex-col'>
                                    <div className='w-full h-full grid grid-cols-1 grid-rows-3 gap-5'>
                                        {items.length >= 3 && items.map((item, i) => {
                                                if(i <= 3) {
                                                    return (
                                                        <a href={item.guid}>
                                                            <div className='bg-white flex relative shadow-md items-center rounded-md'>
                                                                <img className='object-cover w-[115px] h-[115px] rounded-l-md' src='https://picsum.photos/400/300?random=4' />
                                                                <div className='p-2 flex flex-col'>
                                                                    <span className='font-light'>Category</span>
                                                                    <div className='font-semibold text-[1rem] text-slate-900'>{item.title}</div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    )
                                                }
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className=''>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12'>
                            {items.map((item, i) => {
                                if(i != 0) {
                                    return (
                                        <a href={item.guid}>
                                            <div className='bg-white shadow-lg min-h-[320px] md:min-h-[550px] flex flex-col m-4'>
                                                <div className='bg-slate-900 min-h-[120px] md:min-h-[200px] relative'>
                                                    <img className='absolute inset-0 object-cover h-full w-full' src='https://picsum.photos/400/300?random=4' />
                                                </div>
                                                <div className=''>
                                                    <h1 className='text-[1.3rem] md:text-[1.6rem] px-4 py-2'>{item.title}</h1>
                                                    <div className='flex'>
                                                        <p className='p-4 text-[.75rem] md:text-[1.1rem] '>{item.contentSnippet}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
         : (<></>)}
        {/* {items.map((item) => (
            // [guid, title, contentSnippet, link, creator, format(new Date(item.isoDate), 'PPP')]
            <></>
        ))} */}
    </>
  )
}

export default App
