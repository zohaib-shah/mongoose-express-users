var express = require('express');
var router = express.Router();
const UserController = require('../controllers/user.controller');
//const userController = new UserController;
/* GET users listing. */
router.get('/',UserController.findAll);
router.get('/:id',UserController.findOne);
router.put('/:id',UserController.update);
router.post('/',UserController.save);

module.exports = router;
