const express=require('express')
const { AirplaneController } = require('../../controllers')
const { AirplaneMidlewares} = require('../../middleware')
const router=express.Router()
//  /api/v1/airplanes POST
router.post('/',AirplaneMidlewares.validateCreateRequest,AirplaneController.createAirplane)
//  /api/v1/airplanes POST
router.get('/',AirplaneMidlewares.validateCreateRequest,AirplaneController.getAirplanes)

module.exports=router