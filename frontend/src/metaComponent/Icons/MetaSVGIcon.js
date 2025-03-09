const MetaSVGIcon = (props) => {
    return (
        <div className={`${props.positionClassName} ${props.sizeClassName}`}>
            <div className={`w-full h-full ${props.layoutClassName} ${props.hoverClassName}`}>
                <img src={`${process.env.FILE_URL}/svg/${props.src}`} className="w-full h-full"></img>
            </div>
        </div>
    );
}
export default MetaSVGIcon;
