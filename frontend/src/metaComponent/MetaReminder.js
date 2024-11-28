const MetaReminder = (props) => {
    return (
        <div ref={props.scaleRef} className="scale-0 flex flex-col items-center justify-center absolute top-2 w-full">
            <div className="bg-slate-100 w-1/2 h-16 z-20 rounded-full flex items-center">
                <div className="w-4 h-4 bg-pink-600 ml-8 rounded-full"></div>
                <div className="text-black font-mono ml-3">
                    <span>Wrong PassWord Or UserName!!!</span>
                </div>
            </div>
        </div>
    )
}

export default MetaReminder