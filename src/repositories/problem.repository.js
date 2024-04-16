const { model } = require('mongoose');
const { Problem } = require('../models/index');
const NotFound = require('../errors/NotFound.error');
class ProblemRepository {
  async createProblem(problemData) {
    try {
      const newProblem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return newProblem;
    } catch (err) {
      throw err;
    }
  }
  async getAllProblems() {
    try {
      const problems = await Problem.find();
      return problems;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) {
        throw new NotFound('Problem', id);
      }
      return problem;
    } catch (err) {
      if (err.name === 'CastError') {
        throw new NotFound('Problem', id);
      }
      console.log(err);
      throw err;
    }
  }
}

module.exports = ProblemRepository;
