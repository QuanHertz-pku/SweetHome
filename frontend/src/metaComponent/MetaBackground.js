const MetaBackground=(props)=>{
    return(
        <div className="relative h-screen w-full bg-gradient-to-r from-indigo-600 to-pink-500">
            {props.children}
        </div>
    )
}

export default MetaBackground