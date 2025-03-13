const upload = require('../middleware/img_upload');
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const controller = require('../controllers/swapcontroller');
// / index
router.get('/', controller.index);
//get /swaps/new 

router.get('/new', controller.new);

//post /swaps 

router.post('/', controller.create);
//get swaps/:id
router.get('/:id', controller.show);
//get /swaps/:id/edit:
router.get('/:id/edit', controller.edit);

//put swaps/:id  ---update
router.put('/:id', upload.single('img'), controller.update);

//delete 
router.delete('/:id', controller.delete);
module.exports = router;