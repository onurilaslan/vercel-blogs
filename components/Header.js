const Header = () => {
    return (
        <div>
            <div className="w-full bg-white dark:bg-slate-900 border-b dark:border-slate-500/50">
                <div className="max-w-[1080px] mx-auto py-4 dark:text-slate-200 flex items-center justify-between">
                    <h1 className="text-3xl font-black select-none dark:text-slate-300 cursor-pointer">Onurİlaslan</h1>
                    <div className="flex items-center space-x-10">
                        <ul className="flex space-x-6">
                            <li className="text-md font-semibold select-none"><a href="#" className="dark:text-slate-300 p-1 px-2">Hakkımda</a></li>
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
