const upload = require('../middleware/img_upload');
const express = require('express');
const router = express.Router();
const controller = require('../controllers/offercontroller');
router.get('/', controller.index);
router.get('/new', controller.new);
router.post('/', controller.create);
router.get('/:id', controller.show);
router.delete('/:id', controller.delete);
router.put('/:id', controller.edit);
module.exports = router
