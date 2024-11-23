//pages/StartPage.js
function StartPage(){
    return (
        <div className="relative w-full h-screen box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-0">
            <div className="absolute top-0 z-20 w-full">
                <div className="flex items-center">
                    <div className="h-auto w-8 ml-5 mt-2">
                        <img src="http://sweet-home.love/uploads/logo_AigoM.png"/>
                    </div>
                    <div className="h-auto ml-3 mt-3 text-pink-400 font-extrabold">
                        SweetHome
                    </div>
                    <div className="flex mt-3 p-1 items-center justify-center flex-grow">
                        <button className="mx-20 text-gray-300 hover:text-white hover:scale-110 duration-100">Login</button>
                        <button className="mx-20 text-gray-300 hover:text-white hover:scale-110 duration-100">About</button>
                        <button className="mx-20 text-gray-300 hover:text-white hover:scale-110 duration-100">Document</button>     
                    </div>
                </div>
            </div>
        
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <div className="font-bold text-6xl z-10">
                    <span className="text-shadow-xl">Sweet · Home</span>
                </div>
                <div className="font-semibold text-2xl z-10">
                    <span className="text-shadow-md">这里是
                        <span className="text-4xl text-shadow-lg"> 甜 </span>
                        和 
                        <span className="text-4xl text-shadow-lg"> 权 </span>
                        的小窝</span>
                </div>
                <button className="mt-5 w-20 h-10 rounded-full bg-purple-500 z-10 shadow-md hover:scale-105 duration-200 hover:ring-2 hover:ring-white hover:shadow-lg" onClick={()=>{window.location.href="/login"}}>
                    回家
                </button>
            </div>
        
            <div className="absolute top-80 left-20 w-1/3 overflow h-auto z-2 opacity-40">
                <img src="http://sweet-home.love/uploads/logo_AigoM.png"/>
            </div>
            <div className="absolute bottom-0 w-full">
                <div className="flex items-center justify-center font-light text-xs">
                    <a className=" text-gray-50"
                    href="https://beian.miit.gov.cn/?spm=5176.27804673.J_9220772140.60.2aa61f58vo2SkI#/Integrated/index">湘ICP备2024091953号-1</a>
                </div>
            </div>
        </div>
    )
}
export default StartPage