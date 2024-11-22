const express = require('express');
const router = express.Router();
const filesController = require('../controllers/filesController');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // 设置上传文件的存储路径
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        // 设置文件名为当前时间戳 + 文件扩展名
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

// 示例文件路由
router.get('/list', filesController.getFileList);

router.get('/content/:id', filesController.getFileContent);

router.post('/add', filesController.addFile);

router.put('/update/:id', filesController.updateFile);

router.get('/delete/:id', filesController.deleteFile);

router.post('/rename/:id', filesController.renameFile);

router.post('/uploadFile', upload.single('image') , filesController.uploadFile);

module.exports = router;