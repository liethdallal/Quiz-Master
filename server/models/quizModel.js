const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Option schema
const optionSchema = new Schema({
    optionText: {
      type: String,
      required: true
    }
  });

// Question schema (incorperates the option schema)
const questionSchema = new Schema({
    question: {
      type: String,
      required: true
    },
    options: [optionSchema], // Array of options
    correctAnswer: {
      type: Number,
      required: true // Index of the correct option in the options array
    },
    explanation: String 
  });

  // The quiz schema (incorprates the question schema which has the options schema within it)
const quizSchema = new Schema({
    title: {
        type: String,
        required: true
      },
      description: String,
      questions: [questionSchema]
}, {timestamps: true})

module.exports = mongoose.model('Quiz', quizSchema)