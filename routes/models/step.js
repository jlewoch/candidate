const Model = require('objection').Model

class Step extends Model {
  static get tableName () {
    return 'steps'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['level'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        weight: { type: 'integer' },
        level: { type: 'integer' },
        enabled: { type: 'boolean' },
        required: { type: 'boolean' }
      }
    }
  }

  static get relationMappings () {
    const Application = require('./application')
    const Question = require('./question')
    return {
      current_applications: {
        relation: Model.BelongsToOneRelation,
        modelClass: Application,
        join: {
          from: 'applications.status',
          to: 'steps.id'
        }
      },

      questions: {
        relation: Model.BelongsToOneRelation,
        modelClass: Question,
        join: {
          from: 'questions.step',
          to: 'steps.id'
        }
      }
    }
  }
}
module.exports = Step
