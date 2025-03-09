const MetaInput = (props) => {
    return (
        <div className={`${props.sizeClassName} ${props.positionClassName}`}>
            <input type="text" ref={props.ref} className={`block h-full w-full rounded-md border-2 ${props.layoutClassName}`} />
            {props.children}
        </div>
    )
}
export default MetaInput