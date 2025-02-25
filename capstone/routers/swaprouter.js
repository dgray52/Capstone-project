const express = require('express');
const router = express.Router();
const controller = require('../controllers/matchcontroller');
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
//put swaps/:id
router.put('/:id', controller.update);

//delete 
router.delete('/:id', controller.delete);
module.exports = router;