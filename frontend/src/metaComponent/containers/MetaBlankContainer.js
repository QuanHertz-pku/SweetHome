const MetaBlankContainer = (props) => {
    return (
        <div className={`${props.positionClassName} ${props.sizeClassName}`}>
            <div className={`w-full h-full ${props.layoutClassName}`}>
                {props.children}
            </div>
        </div>
    );
}
export default MetaBlankContainer;
