const MetaBasicContainer = (props) => {
    return (
        <div className={`${props.positionClassName} ${props.sizeClassName}`}>
            <div className={`w-full h-full rounded-lg border-2 border-slate-200 bg-slate-100 ${props.layoutClassName}`}>
                {props.children}
            </div>
        </div>
    );
}
export default MetaBasicContainer;
