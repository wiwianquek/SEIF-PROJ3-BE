var express = require('express');
var userController = require('../controllers/users')

var router = express.Router();


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/", userController.getUsers);
router.post("/create", userController.createUser); // add this route


module.exports = router;
