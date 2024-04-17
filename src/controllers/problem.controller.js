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
async function getProblem(req, res, next) {
  try {
    const problem = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Problem fetched successfully',
      data: problem,
      error: {},
    });
  } catch (err) {
    next(err);
  }
}
//Get All Problems
async function getProblems(req, res, next) {
  try {
    const problems = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'All Problems fetched successfully',
      data: problems,
      error: {},
    });
  } catch (err) {
    next(err);
  }
}
//Update Problem
async function updateProblem(req, res, next) {
  try {
    const updatedProblem = await problemService.updateProblem(
      req.params.id,
      req.body
    );
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Problem updated successfully',
      data: updatedProblem,
      error: {},
    });
  } catch (err) {
    next(err);
  }
}
//Delete Problem
async function deleteProblem(req, res, next) {
  try {
    const deletedProblem = await problemService.deleteProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Problem deleted successfully',
      data: deletedProblem,
      error: {},
    });
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
