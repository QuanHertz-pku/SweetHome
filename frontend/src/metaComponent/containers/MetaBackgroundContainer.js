const MetaBackgroundContainers=(props)=>{
    return(
        <div className={`${props.positoinClassName} ${props.sizeClassName}`}>
            <div className={`bg-gradient-to-r from-indigo-600 to-pink-500 w-full h-full ${props.layoutClassName}`}>
                {props.children}
                <div className="z-0 absolute top-80 left-20 w-1/3 overflow h-auto opacity-40">
                    <img src="http://sweet-home.love/uploads/logo_AigoM.png"/>
                </div>
           </div>
        </div>
    )
}

export default MetaBackgroundContainers