const express = require('express');

const userController = require('../controller/user')
const deleteController = require('../controller/delete')

 const userRoutes = express.Router();


userRoutes.post('/users', userController.userData);

userRoutes.get('/users', userController.getData);

userRoutes.delete('/users/:id', deleteController.deleteData);

module.exports = userRoutes;