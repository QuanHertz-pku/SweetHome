const MetaBackgroundContainers=(props)=>{
    console.log(props);
    return(
        <div className={`${props.positoinClassName} ${props.sizeClassName}`}>
            <div className={`bg-gradient-to-r from-indigo-600 to-pink-500 w-full h-full ${props.layoutClassName}`}>
                {props.children}
            </div>
        </div>
    )
}

export default MetaBackgroundContainers