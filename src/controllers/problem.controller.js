const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/NotImplemented.error');
//Ping Problem Controller
function pingProblemController(req, res) {
  return res.json({ Status: 'Problem Controller is Alive' });
}
//Create a new problem
function addProblem(req, res, next) {
  try {
    throw new NotImplemented('addProblem');
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
