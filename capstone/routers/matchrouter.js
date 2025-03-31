const upload = require('../middleware/img_upload');
const express = require('express');
const router = express.Router();
const controller = require('../controllers/matchcontroller');
// / index
router.get('/', controller.index);
//get /matches/new 

router.get('/new', controller.new);

//post /stories 

router.post('/', upload.single('img'), controller.create);
//get matches/:id
router.get('/:id', controller.show);
//get /matches/:id/edit:
router.get('/:id/edit', controller.edit);
//put matches/:id
router.put('/:id', upload.single('img'), controller.update);

//delete 
router.delete('/:id', controller.delete);
module.exports = router;