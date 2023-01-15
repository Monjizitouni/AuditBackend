const express = require('express')
const  router = express.Router()
const config = require("./../config.json");

const TQTr  = require('../Controllers/TQTcontroller');


router.get('/show', TQTr.recupererTQT)
router.post('/jou', TQTr.ajouteTQT)


module.exports= router