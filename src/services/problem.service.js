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
}
module.exports = ProblemService;
