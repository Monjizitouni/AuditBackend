const express = require('express')
const  router = express.Router()
const config = require("./../config.json");

const ContartRoute  = require('../Controllers/ContratController');


router.get('/showw/:key', ContartRoute.recuperercontrat)

router.get('/showed/:key', ContartRoute.recupererTQP)
module.exports= router