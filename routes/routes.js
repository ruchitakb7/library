const express=require('express');

const router= express.Router();

const path= require('path');

const improtingfromcontroller= require('../controller/admin');

router.get('/',improtingfromcontroller.getMainPage);

router.post('/orderbook',improtingfromcontroller.orderbook)

router.get('/orderdata',improtingfromcontroller.fetchorderdata);


module.exports=router;