const MetaBackgroundContainers=(props)=>{
    return(
        <div className={`${props.positoinClassName} ${props.sizeClassName}`}>
            <div className={`bg-gradient-to-r from-indigo-600 to-pink-500 w-full h-full ${props.layoutClassName}`}>
                <div className="absolute top-80 left-20 w-1/3 overflow h-auto z-2 opacity-40">
                    <img src="http://sweet-home.love/uploads/logo_AigoM.png"/>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default MetaBackgroundContainers