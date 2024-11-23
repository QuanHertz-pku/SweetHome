const AvatarMetaComponent = (props) => {
    return (
        <div>
            <button type="button" className="relative flex rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <img className="size-8 rounded-full" src="http://sweet-home.love/uploads/logo_AigoM.png" alt=""/>
            </button>
        </div>
    )
}
export default AvatarMetaComponent;