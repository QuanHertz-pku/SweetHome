const MetaSearchbar = () => {
    return (
        <div className="relative w-full p-2">
            <input type="text" className="block h-8 w-full rounded-md border-2 pl-7" placeholder="Search 开发中" />
            <div className="absolute left-3 top-3 h-6 w-6 text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
        </div>
    )
}
export default MetaSearchbar