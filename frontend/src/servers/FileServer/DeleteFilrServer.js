import GetTokenSender from "../Sender/GetTokenSender";

const DeleteFileServer = (id)=>{
    return GetTokenSender("/files/delete/"+id,null);
}

export default DeleteFileServer;