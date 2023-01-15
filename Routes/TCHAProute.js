const express = require('express')
const  router = express.Router()
const config = require("./../config.json");

const TCHAPr  = require('../Controllers/TCHAP_QTcontrollers');


router.post('/show', TCHAPr.recupererChap)
router.post('/jou', TCHAPr.ajouteTCHAP)
router.get('/showw/:key', TCHAPr.recupererChapp)



module.exports= router