const upload = require('../middleware/img_upload');
const express = require('express');
const router = express.Router();
const controller = require('../controllers/matchcontroller');
const {isLoggedIn} = require('../middleware/auth');
const{validateId} = require('../middleware/validator');

// / index
router.get('/', controller.index);
//get /matches/new 

router.get('/new', isLoggedIn, controller.new);

//post /stories 

router.post('/', isLoggedIn, isLoggedIn, upload.single('img'), controller.create);
//get matches/:id
router.get('/:id', validateId, controller.show);
//get /matches/:id/edit:
router.get('/:id/edit', validateId, isLoggedIn, controller.edit);
//put matches/:id
router.put('/:id', validateId, isLoggedIn, upload.single('img'), controller.update);

//delete 
router.delete('/:id', validateId, isLoggedIn, controller.delete);
module.exports = router;