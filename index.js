  
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());

//Making connection to DB
const {mongoose} = require('./Connection/db');
const lesson=require('./Server/lessonroute');
const squad=require('./Server/squadroute');

//Making the routes
app.use('/api',lesson);
app.use('/api',squad);

//staring a server
app.listen(5000,()=>console.log("Server started at port 5000"))