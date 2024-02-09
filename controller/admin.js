const path= require('path');

const express=require('express')
const routerfile= require('../routes/routes.js');

const BookOrder= require('../model/bookoreder.js');

const Return= require('../model/return.js');

exports.getMainPage= (req,res,next) =>{

    res.sendFile(path.join(__dirname, '..','views','oderbook.html'))

}


exports.orderbook= async (req,res,next)=>{

    const bookname=req.body.bookname;
    const order=req.body.order;
    console.log(order);
    const retuntime=req.body.retuntime;
    console.log(retuntime);
    const fee= req.body.fee
    try{
        const insertdata= await BookOrder.create({
            bookname:bookname,
            order:order,
            retuntime:retuntime,
            fee:fee
        })
        res.json(insertdata)
    }
    catch(e){
        console.log(e)
    }
    
}


exports.fetchorderdata= async (req,res,next)=>{
    try{
        const orderdata= await BookOrder.findAll()
        res.json(orderdata)
    }
    catch(e){
        console.log(e)
    }
}