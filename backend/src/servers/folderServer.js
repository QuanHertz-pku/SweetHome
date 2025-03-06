const Folder = require('../models/Folder');

const getRootFolder = async () => {
    try {
        const rootFolder = await Folder.findOne({ name:'root' });
        return rootFolder;
    } catch (error) {
        return {message: 'Failed to fetch root folder', error}
    }
}
const findFolderById = async (id) => {
    try {
        const folder = await Folder.findById(id);
        return folder;
    } catch (error) {
        return {message: 'Failed to fetch folder', error}
    }
}

const findFolderByParent = async (parent) => {
    try {
        const folders = await Folder.find({ parent: parent });
        return folders;
    } catch (error) {
        return {message: 'Failed to fetch folders', error}
    }
}
const addFolder = async (parent, name) => {
    try {
        parent = await parent ? parent : getRootFolder()._id;
        const folder = new Folder({
            name,
            parent,
            type: 'folder',
        });
        folder.path = `${parent?.path}/${name}`;
        await folder.save();
        return {message: 'Folder created successfully', folder}
    } catch (error) {
        return {message: 'Failed to create folder', error}
    }
}

const deleteFolder = async (id) => {
    try {
        findFolderByParent(id).forEach(async (folder) => {
            await deleteFolder(folder._id);
        });
        await Folder.findByIdAndDelete(id);
        return {message: 'Folder deleted successfully'}
    } catch (error) {
        return {message: 'Failed to delete folder', error}
    }
}

const updateFolderParent = async (id,parent) => {
    try {
        await Folder.findByIdAndUpdate(id, { parent });
        return {message: 'Folder updated successfully'}
    } catch (error) {
        return {message: 'Failed to update folder', error}
    }
}

const updateFolderName = async (id, name) => {
    try {
        await Folder.findByIdAndUpdate(id, { name });
        return {message: 'Folder updated successfully'}
    } catch (error) {
        return {message: 'Failed to update folder', error}
    }
}

module.exports = {
    addFolder,
    deleteFolder,
    updateFolderParent,
    updateFolderName,
    getRootFolder,
    findFolderById,
    findFolderByParent,
}