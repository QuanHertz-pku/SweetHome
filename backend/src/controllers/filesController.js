//1,要有一个端口


const File = require('../models/File');

const addFile = async (req, res) => {
    
}

const getFileContent = async (req, res) => {
    
};
const updateFile = async (req, res) => {
    try {
        console.log("更新请求:", req.body);
        const { id } = req.params;
        const content = req.body;

        // 调试输出，确保请求数据正确
        console.log("更新请求的文件 ID:", id);
        console.log("更新内容:", content);

        // 使用 findByIdAndUpdate 更新文件内容
        await File.findByIdAndUpdate(
            id,
            { filecontent: content },
            { new: true, upsert: false } // 确保返回更新后的文档且不新建
        );

        // 手动查找已更新的文件，确保获取的是最新数据
        const updatedFile = await File.findById(id);

        if (!updatedFile) {
            return res.status(404).json({ message: "文件未找到" });
        }

        console.log("文件更新成功:", updatedFile);
        res.status(200).json(updatedFile); // 返回更新后的文件内容
    } catch (error) {
        console.error("更新文件时出错:", error);
        res.status(500).json({ message: "服务器内部错误" });
    }
};

const deleteFile = async (req, res) => {

};

const renameFile = async (req, res) => {
    
};

const uploadFile = (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
  
    // 返回上传后的文件信息
    res.json({
      success: 1,
      file: {
        url: `${process.env.PHOTO_URL}${req.file.filename}`,
      },
    });
  };

module.exports = { getFileList, addFile, getFileContent, updateFile,deleteFile,renameFile,uploadFile};
