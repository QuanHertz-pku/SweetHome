const folderServer = require('../servers/folderServer');

const getRootList = async () => {
    const rootFolder = await folderServer.getRootFolder();
    const rootList = await folderServer.findFolderByParent(rootFolder.id);
    return rootList;
};

const addFolder = async (parent,name) => {
    if(!parent){
        parent = await folderServer.getRootFolder();
    }
    const folder = await folderServer.addFolder(parent, name);
    return folder;
};

module.exports = {
    getRootList,
    addFolder
};