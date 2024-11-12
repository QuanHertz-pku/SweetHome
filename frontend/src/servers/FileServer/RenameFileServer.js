import PostTokenSender from "../Sender/PostTokenSender";

const RenameFileServer = (id,newName)=>{
    return PostTokenSender("/files/rename/"+id,{newName:newName});
}

export default RenameFileServer;