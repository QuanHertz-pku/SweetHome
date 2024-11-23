const LinkMetaComponent = (props) =>
{
    return (
        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium  no-underline text-gray-300 hover:bg-gray-700 hover:text-white">{props.children}</a>
    )
}
export default LinkMetaComponent