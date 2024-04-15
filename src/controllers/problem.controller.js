const { StatusCodes } = require('http-status-codes');
//Ping Problem Controller
function pingProblemController(req, res) {
  return res.json({ Status: 'Problem Controller is Alive' });
}
//Create a new problem
function addProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'Not Implemented' });
}
//Get Problem
function getProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'Not Implemented' });
}
//Get All Problems based on the filters
function getProblems(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'Not Implemented' });
}
//Update Problem
function updateProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'Not Implemented' });
}
//Delete Problem
function deleteProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'Not Implemented' });
}
module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  updateProblem,
  deleteProblem,
};
