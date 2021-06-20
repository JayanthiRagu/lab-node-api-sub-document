const express=require('express')
require('../Connection/db')

//creating a routing middleware
const router=express.Router();

//Exporting a module
const {lesson,squad}=require('../Model/model')


//CRUD operations
//Add a new lesson
router.post('/lessons',(req,res)=>{
    const newLesson=new lesson(req.body)
    newLesson.save((err,data)=>{
        if(err){
            res.status(500)
            res.send({error:"Lesson Details cannot be added"})
        }
        else{
        res.status(200)
        res.send(data)
        }
        res.end()
    })
})
//list all the lesson
router.get('/lessons',(req,res)=>{
    lesson.find((err,data)=>{
        if(err){
            res.status(500)
            res.send({Error:"Cannot retrieve lessons"})
        }
        else{
        res.status(200)
        res.send(data)
        }
        res.end()
    })
})
//fetching the particular lesson details by using id
router.get('/lessons/:id',(req,res)=>{
    lesson.find({lesson_id:req.params.id},function (err,data){
        if(err){
            console.log(err)
            res.status(500)
            res.send({Error:"Cannot retrieve lessons"})
        }
        if(data)
        {
            res.status(200)
            res.send(data)
        }
        else{
            res.status(404)
            res.send({Message:"Lessons id provided is not available"})
        }
        res.end()
    })
    
})

//Update a lesson 
router.put('/lessons/:id',(req,res)=>{
    lesson.findOneAndUpdate({lesson_id:req.params.id},{$set:req.body},{new:true},(err,data)=>{
        if(err){
            res.status(500)
            res.send({Error:"Lesson cannot be updated"})
        }
        if(data)
        {
            res.status(200)
            res.send(data)
        }
        else{
            res.status(404)
            res.send({Message:"Lessons id provided is not available"})
        }
        res.end()
    })
    
})

//Delete a lesson
router.delete('/lessons/:id',(req,res)=>{
    lesson.findOneAndRemove({lesson_id:req.params.id},(err,data)=>{
        if(err){
            res.status(500)
            res.send({Error:"Lesson cannot be deleted"})
        }
        if(data)
        {
            res.status(200)
            res.send(data)
        }
        else{
            res.status(404)
            res.send({Message:"Lessons id provided is not available"})
        }
        res.end()
    })

})
module.exports=router;