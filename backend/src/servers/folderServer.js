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
        const folders = await Folder.find({ parent });
        return folders;
    } catch (error) {
        return {message: 'Failed to fetch folders', error}
    }
}
const addFolder = async (parent, name) => {
    try {
        parent = await parent ? parent : getRootFolder()._id;
        parentReal=await findFolderById(parent);
        console.log(parentReal.path);
        const folder = new Folder({
            name,
            parent,
            type: 'folder',
            path: `${parentReal.path}/${name}`
        });
        await folder.save();
        return {message: 'Folder created successfully', folder}
    } catch (error) {
        return {message: 'Failed to create folder', error}
    }
}

const deleteFolder = async (id) => {
    try {
        const chrildren = await findFolderByParent(id); 
        chrildren.forEach(async (folder) => {
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

const updateFolderPath = async (id, path) => {
    try {
        await Folder.findByIdAndUpdate(id, { path });
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
    updateFolderPath
}