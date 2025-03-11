const MetaColorContainer = (props) => {
    return (
        <div className={`${props.positionClassName} ${props.sizeClassName}`}>
            <div className={`w-full h-full rounded-lg ${props.colorClassName} ${props.layoutClassName}`}>
                {props.children}
            </div>
        </div>
    );
}
export default MetaColorContainer;
