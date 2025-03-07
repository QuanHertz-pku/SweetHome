const express = require('express');
const router = express.Router();
const floderController = require('../controllers/foldersController');

router.get('/list',floderController.getRootList);
router.post('/add',floderController.addFolder);
router.post('/delete',floderController.deleteFolder);
router.post('/list',floderController.getFolderList);
router.post('/move',floderController.moveFolder);
router.post('/rename',floderController.renameFolder);

module.exports = router;