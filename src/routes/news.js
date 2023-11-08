const express = require('express');
const route = express.Router();
const NewController = require('../app/controller/NewsController')

route.use('/:slug',NewController.detail)
route.use('/',NewController.index)

module.exports=route;