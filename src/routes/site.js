const express = require('express');
const route = express.Router();
const SiteController = require('../app/controller/SiteController');

route.get('/search', SiteController.search);
route.get('/', SiteController.index);

module.exports = route;
