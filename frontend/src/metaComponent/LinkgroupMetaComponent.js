const LinkgroupMetaComponent = (props) =>
{
    return (
        <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
                {props.children}
            </div>
        </div>
    )
}
export default LinkgroupMetaComponent;