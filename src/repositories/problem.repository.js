const { model } = require('mongoose');
const { Problem } = require('../models/index');
const NotFound = require('../errors/NotFound.error');
const logger = require('../config/logger.config');
class ProblemRepository {
  //CreateProblem
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
  //GetAll
  async getAllProblems() {
    try {
      const problems = await Problem.find();
      return problems;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  //GetById
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
  //UpdateByID
  async updateProblem(id, problemData) {
    try {
      const problem = await Problem.findByIdAndUpdate(id, problemData, {
        new: true,
      });
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
  //DeleteByID
  async deleteProblem(id) {
    try {
      const problem = await Problem.findByIdAndDelete(id);
      if (!problem) {
        logger.error(`Problem with ${id} not found`);
        throw new NotFound('Problem', id);
      }
      return problem;
    } catch (err) {
      if (err.name === 'CastError') {
        logger.error(`Problem with ${id} not found`);
        throw new NotFound('Problem', id);
      }
      console.log(err);
      throw err;
    }
  }
}

module.exports = ProblemRepository;
