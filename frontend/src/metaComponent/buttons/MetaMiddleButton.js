const MetaBasicButton = (props) => {

    return (
        <div className={`${props.positionClassName} ${props.sizeClassName}`}>
            <div 
                className={`h-full w-full rounded-xl bg-purple-500 hover:bg-purple-600 hover:scale-105 ${props.layoutClassName}`}
                onClick={props.click}
            >
                {props.children}
            </div>
        </div>
    );
}

export default MetaBasicButton;