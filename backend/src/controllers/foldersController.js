const folderServer = require('../servers/folderServer');
const folderFunction = require('../functions/folderFunction');

const addFolder = async (req, res) => {
    const { name,parent } = req.body;
    const message = await folderFunction.addFolder(parent,name);
    res.json(message);
}

const deleteFolder = async (req, res) => {
    const { id } = req.body;
    const message = await folderFunction.deleteFolder(id);
    res.json(message);
}

const getRootList = async (req, res) => {
    const list = await folderFunction.getRootList();
    console.log(list);
    res.json(list);
}

const getFolderList = async (req, res) => {
    const { parent } = req.body;
    const list = await folderFunction.getFolderList(parent);
    res.json(list);
}

const moveFolder = async (req, res) => {
    const { id,parent } = req.body;
    const message = await folderFunction.moveFolder(id,parent);
    res.json(message);
}

const renameFolder = async (req, res) => {
    const { id,name } = req.body;
    const message = await folderFunction.renameFolder(id,name);
    res.json(message);
}

module.exports = {
    addFolder,
    deleteFolder,
    getRootList,
    getFolderList,
    moveFolder,
    renameFolder
}