const { markdownSanitizer } = require('../utils/index');
class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }
  async createProblem(problemData) {
    try {
      console.log('Problem Data: ', problemData);
      //Sanitize the problem description
      problemData.description = markdownSanitizer(problemData.description);
      //add the problem to the database
      const newProblem = await this.problemRepository.createProblem(
        problemData
      );
      console.log('Problem Created: ', newProblem);
      return newProblem;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  async getAllProblems() {
    try {
      const problems = await this.problemRepository.getAllProblems();
      console.log('Problems in Service: ', problems);
      return problems;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  async getProblem(id) {
    try {
      const problem = await this.problemRepository.getProblem(id);
      return problem;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
module.exports = ProblemService;
