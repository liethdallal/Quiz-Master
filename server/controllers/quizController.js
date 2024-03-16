const Quiz = require('../models/quizModel')
const mongoose = require('mongoose')

//GET All Quizes 
async function getAllQuizes(req, res){
    const quizes = await Quiz.find({}).sort({createdAt: -1})
    res.status(200).json(quizes)
}

//GET a single quiz by its id 
async function getOneQuiz(req,res){
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such quiz'})
    }
    const quiz = await Quiz.findById(id)
    if(!quiz){
        return res.status(400).json({error: 'No such quiz'})
    }
    res.status(200).json(quiz)
}

//POST a Quiz 
async function createQuiz(req,res){
    const {title, description, questions} = req.body

    try{
        const quiz = await Quiz.create({title, description, questions})
        res.status(200).json(quiz)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }

}

//PATCH in otherwords update a quiz 
async function updateQuiz(req,res){
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such quiz'})
    }
    const quiz = await Quiz.findOneAndUpdate({_id: id}, {
         ...req.body
    })
    if(!quiz){
        return res.status(400).json({error: 'No such quiz'})
    }
    res.status(200).json(quiz)
}

//DELETE a quiz 
async function deleteQuiz(req,res){
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such quiz'})
    }
    const quiz = await Quiz.findOneAndDelete({_id: id})
    if(!quiz){
        return res.status(400).json({error: 'No such quiz'})
    }
    res.status(200).json(quiz)
}

module.exports = {getAllQuizes, getOneQuiz, createQuiz, updateQuiz, deleteQuiz}