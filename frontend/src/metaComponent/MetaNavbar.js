const MetaNavbar=()=>{
    return (
        <div className="absolute top-0 z-10 w-full">
            <div className="flex items-center">
                <div className="h-auto w-8 ml-5 mt-2">
                    <img src="http://sweet-home.love/uploads/logo_AigoM.png"/>
                </div>
                <div className="h-auto ml-3 mt-3 text-pink-400 font-extrabold">
                    SweetHome
                </div>
                <div className="flex mt-3 p-1 items-center justify-evenly flex-grow">
                    <button className=" text-gray-300 hover:text-white hover:scale-110 duration-100">Login</button>
                    <button className=" text-gray-300 hover:text-white hover:scale-110 duration-100">About</button>
                    <button className=" text-gray-300 hover:text-white hover:scale-110 duration-100">Document</button>     
                </div>
            </div>
        </div>
    );
}
export default MetaNavbar;