const express = require('express');
const displaycardsController = require('../controllers/displaycards');

const router = express.Router();

//Get cards by month and year
router.get("/:month/:year", displaycardsController.getDisplayCards);

