const express=require('express')
require('../Connection/db')

//creating a routing middleware
const router=express.Router();

//Exporting a module
const {lesson,squad}=require('../Model/model')


//CRUD operations
//Add a new squad
router.post('/squads',(req,res)=>{
    const newSquad=new squad(req.body)
    newSquad.save((err,data)=>{
        if(err){
            res.status(500)
            res.send({error:"Squad details cannot be added"})
        }
        else{
        res.status(200)
        res.send(data)
        }
        res.end()
    })
})
//list all the squad
router.get('/squads',(req,res)=>{
    squad.find().populate('lesson_id').exec((err,data)=>{
        if(err){
            res.status(500)
            res.send({Error:"Cannot retrieve squads"})
        }
        else{
        res.status(200)
        res.send(data)
        }
        res.end()
    })
})

//fetch the particular squad details by using id
router.get('/squads/:id',(req,res)=>{
    squad.find({squad_id:req.params.id},(err,data)=>{
        if(err){
            res.status(500)
            res.send({Error:"Cannot retrieve squad"})
        }
        if(data)
        {
            res.status(200)
            res.send(data)
        }
        else{
            res.status(404)
            res.send({Message:"Squad id provided is not available"})
        }
        res.end()
    })
})

//Update a squad
router.put('/squads/:id',(req,res)=>{
    squad.findOneAndUpdate({squad_id:req.params.id},{$set:req.body},{new:true},(err,data)=>{
        if(err){
            res.status(500)
            res.send({Error:"Squad cannot be updated"})
        }
        if(data)
        {
            res.status(200)
            res.send(data)
        }
        else{
            res.status(404)
            res.send({Message:"Squad id provided is not available"})
        }
        res.end()
    })
})

//Delete a squad
router.delete('/squads/:id',(req,res)=>{
    squad.findOneAndRemove({squad_id:req.params.id},(err,data)=>{
        if(err){
            res.status(500)
            res.send({Error:"Squad cannot be deleted"})
        }
        if(data)
        {
            res.status(200)
            res.send(data)
        }
        else{
            res.status(404)
            res.send({Message:"Squads id provided is not available"})
        }
        res.end()
    })
})
module.exports=router;