const express = require('express');
const route = express.Router();
const SiteController = require('../app/controller/SiteController')

route.use('/search',SiteController.search)
route.use('/',SiteController.index)

module.exports=route;