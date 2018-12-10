const Model = require('objection').Model

class SecondInterviewEvaluations extends Model {
  static get tableName () {
    return 'second_interview_evaluations'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['application', 'question'],

      properties: {
        id: { type: 'integer' },
        notes: { type: 'string', minLength: 1, maxLength: 255 },
        application: { type: 'integer' },
        question: { type: 'integer' },
        provided_points: { type: 'integer', min: 0, max: 10 }
      }
    }
  }
}
module.exports = SecondInterviewEvaluations
