import MetaFileitem from "./MetaFileitem"

const MetaFilelist = (props) => {
    return (
        <div className="h-1/2 w-full">
            <div className="flex w-full justify-between">
                <div className="ml-1 font-mono font-thin text-slate-600">Note</div>
                <div className="ml-1 text-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="1.4" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
            <ul className="ml-1 pl-0 font-mono text-sm font-thin text-slate-700">
                {
                    props.files.map((file, index) => (
                        <MetaFileitem key={index} filename={file.filename} id={file.id}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default MetaFilelist