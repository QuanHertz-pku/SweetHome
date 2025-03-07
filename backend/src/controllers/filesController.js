const fileFunction = require('../functions/fileFunction');
const filesServer = require('../servers/filesServer');

const addFile = async (req, res) => {
    const {parent} = req.body;
    const message = await fileFunction.addFile(parent);
    res.send(message);
}

const getFileContent = async (req, res) => {
    const {id} = req.body;
    const message = await filesServer.getFileContent(id);
    res.send(message);
};
const updateFile = async (req, res) => {
    const {id,filecontent} = req.body;
    const message = await filesServer.updateFile(id,filecontent);
    res.send(message);
};

const uploadFile = async (req, res) => {
    const {filename} = req.body;
    const message = await filesServer.uploadFile(filename);
};

module.exports = { addFile, getFileContent, updateFile,uploadFile};
