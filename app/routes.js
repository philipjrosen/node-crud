// create a new express router
const express = require('express');
const router = express.Router();
const mainController = require('./controllers/main.controller');ß
// export router
module.exports = router;

// define routes
router.get('/', mainController.showHome);