const MetaSecondButton = (props) => {

    return (
        <div className={`${props.positionClassName} ${props.sizeClassName}`}>
            <div 
                className={`h-full w-full rounded-xl bg-indigo-500 hover:bg-indigo-600 hover:scale-105 ${props.layoutClassName}`}
                onClick={props.click}
            >
                {props.children}
            </div>
        </div>
    );
}

export default MetaSecondButton;