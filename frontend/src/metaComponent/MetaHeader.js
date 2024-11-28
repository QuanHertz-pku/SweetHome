const MetaHeader=()=>{
    return(
        <>
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
            {/*You Must sure your BG is 'relative'*/}
            <div className="absolute top-80 left-20 w-1/3 overflow h-auto z-2 opacity-40">
                <img src="http://sweet-home.love/uploads/logo_AigoM.png"/>
            </div>
        </>
    );
}
export default MetaHeader;