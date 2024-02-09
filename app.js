const express= require('express');
const app= express();

const path=require('path');

const seq = require('./util/database.js');

const  BookOrder= require('./model/bookoreder.js');
const Return= require('./model/return.js');

app.use(express.json());

app.use(express.static('public')) 

app.use(express.static(path.join(__dirname, "views"))) 

const routerfile= require('./routes/routes.js');   
app.use(routerfile);

seq.sync()
.then(res=>
   { app.listen(1007);  
})                               
.catch((e)=>{
   console.log(e)

})
