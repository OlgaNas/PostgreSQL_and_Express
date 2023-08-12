const Router = require('express');
const router = new Router();
const userController = require('../controllers/user.controller');

// For each function in userController create a route

router.post('/user', userController.createUser); // http://localhost:8080/api/user
router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getOneUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);






module.exports = router;