const Header = () => {
    return (
        <div>
            <div className="w-full bg-white dark:bg-slate-900 border-b dark:border-slate-500/50">
                <div className="max-w-[1080px] mx-auto py-4 dark:text-slate-200 flex items-center justify-between">
                    <div className="flex items-center dark:fill-slate-300 px-2">
                        <h1 className="text-xl sm:text-3xl font-black select-none dark:text-slate-300 cursor-pointer after:content-['.']">Onurİlaslan</h1>
                        <svg className="w-3 sm:w-5 -mt-1  sm:-ml-1 z-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"/></svg>
                    </div>
                    <div className="px-2 dark:fill-slate-300">
                        <svg className="block sm:hidden w-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
                    </div>
                    <div className="hidden sm:flex items-center space-x-10 px-4">
                        <ul className="flex space-x-6">
                            <li className="text-md font-semibold select-none"><a href="/hakkimda" className="dark:text-slate-300 p-1 px-2">Hakkımda</a></li>
                            <li className="text-md font-semibold select-none"><a href="/" className="dark:text-slate-300 p-1 px-2">Blog</a></li>
                        </ul>
                        <div className="dark:fill-white select-none dark:bg-slate-800/50 p-2 rounded-md">
                            <svg id="darkmode" className="w-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
