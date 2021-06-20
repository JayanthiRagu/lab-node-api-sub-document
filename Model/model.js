const mongoose = require('mongoose')
const Schema=mongoose.Schema

//lesson schema
const lesson = new Schema({
        name: {type: String},
        lesson_id: {type: String}
    },
    {collection: 'lesson'}
    )

//Squad schema
const squad = new Schema({
        name: {type: String},
        lesson_id: {type:mongoose.Schema.Types.ObjectId,ref:"lesson"},
        squad_id:{type:String},
        cohort:{type:String}
    },
    {collection: 'squad'}
    )

//Model
const lessons=mongoose.model('lesson',lesson)
const squads=mongoose.model('squad',squad)

module.exports = {
    lesson: lessons,
    squad: squads}


