const MetaShadowLine = (props) => {
    return (
        <div className={`${props.positionClassName} ${props.sizeClassName}`}>
            <div className={`w-full h-full ${props.layoutClassName}`}>
                <span className={`truncate text-shadow-xl ${props.fontClassName}`}>
                    {props.children}
                </span>
            </div>
        </div>
    );
}
export default MetaShadowLine;