const express = require('express');
const router = express.Router();
const mortyController = require('../controllers/mortyController');

const axios = require('axios');
const { route } = require('./userRoutes');

router.get('/', mortyController.readMorty);
router.get('/:id', mortyController.readMortyById);

module.exports = router;