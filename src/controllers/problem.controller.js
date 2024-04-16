const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/NotImplemented.error');
const { ProblemService } = require('../services/index');
const { ProblemRepository } = require('../repositories/index');
const problemService = new ProblemService(new ProblemRepository());
//Ping Problem Controller
function pingProblemController(req, res) {
  return res.json({ Status: 'Problem Controller is Alive' });
}
//Create a new problem
async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    console.log('Incoming Request Body', req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Problem created successfully',
      data: newProblem,
      error: {},
    });
  } catch (err) {
    next(err);
  }
}
//Get Problem
function getProblem(req, res, next) {
  try {
    throw new NotImplemented('getProblem');
  } catch (err) {
    next(err);
  }
}
//Get All Problems based on the filters
function getProblems(req, res, next) {
  try {
    throw new NotImplemented('getProblems');
  } catch (err) {
    next(err);
  }
}
//Update Problem
function updateProblem(req, res, next) {
  try {
    throw new NotImplemented('updateProblem');
  } catch (err) {
    next(err);
  }
}
//Delete Problem
function deleteProblem(req, res, next) {
  try {
    throw new NotImplemented('deleteProblem');
  } catch (err) {
    next(err);
  }
}
module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  updateProblem,
  deleteProblem,
};
