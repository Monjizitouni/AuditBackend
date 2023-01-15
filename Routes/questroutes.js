const express = require('express')
const  router = express.Router()
const config = require("./../config.json");

const quest  = require('../Controllers/Questcontroller');



router.post('/jou', quest.ajouteTCHAP)
router.get('/showw/:key', quest.recupererquestqt)



module.exports= router