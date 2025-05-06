const upload = require('../middleware/img_upload');
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const controller = require('../controllers/swapcontroller');
const {isLoggedIn} = require('../middleware/auth');
const{validateId} = require('../middleware/validator');


// / index
router.get('/', controller.index);
//get /swaps/new 

router.get('/new', isLoggedIn, controller.new);

//post /swaps 

router.post('/', isLoggedIn, upload.single('img'), controller.create);
//get swaps/:id
router.get('/:id', validateId, controller.show);
//get /swaps/:id/edit:
router.get('/:id/edit', validateId, isLoggedIn, controller.edit);

//put swaps/:id  ---update
router.put('/:id', validateId, isLoggedIn,upload.single('img'), controller.update);

//delete 
router.delete('/:id', validateId, isLoggedIn, controller.delete);
module.exports = router;