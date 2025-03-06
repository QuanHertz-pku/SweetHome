const folderServer = require('../servers/folderServer');
const folderFunction = require('../functions/folderFunction');

const addFolder = async (req, res) => {
    const { name,parent } = req.body;
    const message = await folderFunction.addFolder(parent,name);
    res.json(message);
}

const deleteFolder = (req, res) => {
    const { id } = req.body;
    const message = folderServer.deleteFolder(id);
    res.json(message);
}

const getRootList = async (req, res) => {
    const list = await folderFunction.getRootList();
    console.log(list);
    res.json(list);
}

module.exports = {
    addFolder,
    deleteFolder,
    getRootList
}