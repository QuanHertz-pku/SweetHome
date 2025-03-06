const express = require('express');
const router = express.Router();
const floderController = require('../controllers/foldersController');

router.get('/list',floderController.getRootList);
router.post('/add',floderController.addFolder);
router.post('/delete',floderController.deleteFolder);

module.exports = router;