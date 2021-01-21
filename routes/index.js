const { Router } = require('express');
const express = require('express');
const testController = require('../controllers/test.controller');

const router = express.Router();
router.get('/all', testController.getAll);

module.exports = router;
