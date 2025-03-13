const MetaDot = (props) => {
    return (
        <div className={`${props.positionClassName} ${props.sizeClassName}`}>
            <div className={`w-full h-full ${props.colorClassName} rounded-full`}>
            </div>
        </div>
    );
}
export default MetaDot;
