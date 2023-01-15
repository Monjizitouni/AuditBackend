const express = require('express')
const  router = express.Router()
const config = require("./../config.json");

const Client  = require('../Controllers/ClientController');



router.post('/login', Client.login)
router.get('/showw', Client.recupererclient)



module.exports= router