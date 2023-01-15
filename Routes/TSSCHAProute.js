const express = require('express')
const  router = express.Router()
const config = require("./../config.json");

const TSSCHAP  = require('../Controllers/TSSCHAPcontroller');



router.post('/jou', TSSCHAP.ajouteTCHAP)
router.get('/showw/:key', TSSCHAP.recupererTSSCHAP)



module.exports= router