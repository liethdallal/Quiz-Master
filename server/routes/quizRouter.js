const express = require('express')
const router = express.Router()
const quizController = require('../controllers/quizController')

router.get('/', quizController.getAllQuizes)

router.get('/:id', quizController.getOneQuiz)

router.post('/', quizController.createQuiz)

router.patch('/:id', quizController.updateQuiz)

router.delete('/:id', quizController.deleteQuiz)

module.exports = router