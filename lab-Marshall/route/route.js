'use strict';

const Router = require('express').Router;
const debug = require('debug')('cf:router:students')
const students = require('../model/userConstruct');
const appError = require('../lib/appError');

const studentRegistry = {};
const router = Router();

var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/user/:id', (req, res) => {
  res.status(200).json({id: req.params.id});
});

router.post('/user', (req, res) => {
  res.status(200).json({name: req.body.name});
});

router.post('/user/:id', (req, res) => {
  res.status(200).json({id: req.params.id});
});

module.exports = router;
