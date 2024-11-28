const MetaUserbar=()=>{
    return (
        <div className="flex h-full w-full flex-col rounded-md border-2 border-slate-200 bg-slate-100">

            <div className="flex h-12 w-full justify-between p-2">
                <div className="flex">
                    <div className="h-8 w-8 rounded-full bg-pink-400"></div>
                    <div className="ml-3 mt-1 font-mono">name</div>
                </div>
            </div>
            <div className="mt-1 hover:scale-105 hover:text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
            </div>
        </div>
    );
}
export default MetaUserbar;