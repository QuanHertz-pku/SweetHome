const folderServer = require('../servers/folderServer');
const filesServer = require('../servers/filesServer');
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

const deleteFolder = async (folderId) => {
    const folder = await folderServer.findFolderById(folderId);
    if(folder.type=== 'file'){
        await filesServer.deleteFile(folder.file);
        await folderServer.deleteFolder(folderId);
    }else{
        const children = await folderServer.findFolderByParent(folderId);
        children.forEach(async (child) => {
            await deleteFolder(child.id);
        });
    }
    const message = await folderServer.deleteFolder(folderId);
    return message;
};

const getFolderList = async (parentId) => {
    if(!parentId){
        parentId = await folderServer.getRootFolder().id;
    }
    const folderList = await folderServer.findFolderByParent(parentId);
    return folderList;
};

const moveFolder = async (folderId,parentId) => {
    const message = await folderServer.updateFolderParent(folderId,parentId);
    const parent = await folderServer.findFolderById(parentId);
    const folder = await folderServer.findFolderById(folderId);
    await folderServer.updateFolderPath(folderId,`${parent.path}/${folder.name}`);
    return message;
};

const renameFolder = async (folderId,name) => {
    const message = await folderServer.updateFolderName(folderId,name);
    const folder = await folderServer.findFolderById(folderId);
    const parent = await folderServer.findFolderById(folder.parent);
    await folderServer.updateFolderPath(folderId,`${parent.path}/${name}`);
    if(folder.type === 'file'){
        await filesServer.reanameFile(folder.file,name);
    }
    return message;
};

module.exports = {
    getRootList,
    addFolder,
    deleteFolder,
    getFolderList,
    moveFolder,
    renameFolder
};