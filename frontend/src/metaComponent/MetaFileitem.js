import {useRef} from "react";
import DeleteFileServer from "../servers/FileServer/DeleteFilrServer";
import RenameFileServer from "../servers/FileServer/RenameFileServer";
const MetaFileitem = (props) => {
    const flyoutRef=useRef(null);
    const renameRef=useRef(null);

    return (
        <li className="relative">
            <div className="flex items-center justify-between hover:bg-white">
                <div className="flex items-center flex-grow"
                    onClick={()=>{
                        console.log(props.index); 
                        props.setSelectedFile(props.index);
                        props.setSelectedList(0);
                    }}
                >
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                    </div>
                    <div className="ml-1 font-blod">{props.filename}</div>
                    <input type="text" ref={renameRef}
                        className="absolute left-4 px-1 bg-sky-100 w-full font-blod invisible"
                        defaultValue={props.filename}
                        onKeyDown={
                            async (event)=>{
                                if(event.key=="Enter"){
                                    try {
                                        await RenameFileServer(props.id,renameRef.current.value);
                                        window.location.reload();
                                    } catch (error) {
                                        console.error('Error:', error);
                                    }
                                }
                            }
                        }
                        />
                </div>
                
                <div className="relative rounded-sm hover:bg-slate-200 mr-2"
                    onClick={()=>{
                        flyoutRef.current.classList.toggle("invisible");
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                    <div className="invisible absolute top-4 left-0 z-30 -translate-x-32"
                        ref={flyoutRef}    
                    >
                        <div className="w-32 h-auto bg-slate-100 rounded-md border-2 border-slate-300">
                            <div className="h-4 my-1 mx-2 hover:bg-white"
                                onClick={() => {
                                    DeleteFileServer(props.id);
                                    window.location.reload();
                                }}
                            >
                                Delete
                            </div>
                            <div className="h-4 my-1 mx-2 hover:bg-white"
                                onClick={()=>{
                                    renameRef.current.classList.toggle("invisible");
                                }}
                            >
                                Rename
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
export default MetaFileitem;