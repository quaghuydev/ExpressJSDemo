const express = require('express');
const route = express.Router();
const NewController = require('../app/controller/NewsController');

route.get('/:slug', NewController.detail);
route.get('/', NewController.index);

module.exports = route;
