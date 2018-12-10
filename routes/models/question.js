const Model = require('objection').Model

class Question extends Model {
  static get tableName () {
    return 'questions'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['question', 'step', 'weight'],

      properties: {
        id: { type: 'integer' },
        question: { type: 'string', minLength: 1, maxLength: 255 },
        weight: { type: 'integer', min: 0, max: 100 },
        enabled: { type: 'boolean' }
      }
    }
  }
}
module.exports = Question
