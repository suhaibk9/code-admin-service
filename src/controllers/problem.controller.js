//Ping Problem Controller
function pingProblemController(req, res) {
  return res.json({ Status: 'Problem Controller is Alive' });
}
//Create a new problem
function addProblem(req, res) {}
//Get Problem
function getProblem(req, res) {}
//Get All Problems based on the filters
function getProblems(req, res) {}
//Update Problem
function updateProblem(req, res) {}
//Delete Problem
function deleteProblem(req, res) {}
module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  updateProblem,
  deleteProblem,
};
