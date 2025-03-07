const File = require('../models/File');
const folderServer = require('./folderServer');

const addFile = async() => {
    try{
        const newFile = await File({
            filename: "是新文件！",
            filecontent: {
                "time": Date.now(),
                "blocks": [
                    {
                        "id": "mhTl6ghSkV",
                        "type": "paragraph",
                        "data": {
                            "text": "「把世界的萤火装进文字，这里是你永不打烊的星空」"
                        }
                    }
                ]
            }
        });
        await newFile.save();
        return newFile;
    }catch(err){
        console.log(err);
    }
}

const getFileContent = async(id) => {
    try{
        const file = await File.findById(id);
        return file;
    }catch(err){
        console.log(err);
    }
}

const deleteFile = async(id) => {
    try{
        const file = await File.findByIdAndDelete(id);
        return file;
    }catch(err){
        console.log(err);
    }
}

const reanameFile = async(id, filename) => {
    try{
        const file = await File.findByIdAndUpdate(id, {filename: filename});
        return file;
    }catch(err){
        console.log(err);
    }
}

const uploadFile = async(filename) => {
    try{
            return {
                success: 1,
                file: {
                url: `${process.env.PHOTO_URL}${filename}`,
                },
            };
    }catch(err){
        console.log(err);
    }
}

const updateFile = async(id, filecontent) => {
    try{
        const file = await File.findByIdAndUpdate(
            id,
            { filecontent: filecontent },
        );
        return file;
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    addFile,
    getFileContent,
    deleteFile,
    reanameFile,
    uploadFile,
    updateFile
}