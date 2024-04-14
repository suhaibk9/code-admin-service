const express = require('express');
const ProblemController = require('../../controllers/problem.controller');
const problemRouter = express.Router();
//pingController
problemRouter.get('/ping', ProblemController.pingProblemController);
//Get Problem By Id
problemRouter.get('/:id', ProblemController.getProblem);
//Get All Problems
problemRouter.get('/', ProblemController.getProblems);
//Create a new Problem
problemRouter.post('/', ProblemController.addProblem);
//Delete Problem
problemRouter.delete('/:id', ProblemController.deleteProblem);
//Update Problem
problemRouter.put('/:id', ProblemController.updateProblem);

module.exports = problemRouter;
