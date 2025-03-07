const filesServer = require('../servers/filesServer');
const folderServer = require('../servers/folderServer'); 

const addFile = async(parent) => {
    const file = await filesServer.addFile();
    parent = await parent ? parent : folderServer.getRootFolder();
    console.log(file);
    const message = await folderServer.addFile(parent, file.filename ,file.id);
    return message;
};

module.exports = {
    addFile,
};