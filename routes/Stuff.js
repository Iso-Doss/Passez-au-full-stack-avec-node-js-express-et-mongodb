const express = require('express');

const auth = require("../middleware/Auth");

const multer = require("../middleware/MulterConfig");

const stuffController = require("../controllers/Stuff");

const router = express.Router();

router.post('/', auth, multer, stuffController.createThing);

router.get('/:id', auth, stuffController.readThing);

router.get('/', auth, stuffController.readThings);

router.put('/:id', auth, multer, stuffController.updateThing);

router.delete('/:id', auth, stuffController.deleteThing);

module.exports = router;