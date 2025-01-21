const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.indexProd);

module.exports = router;