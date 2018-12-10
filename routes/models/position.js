const Model = require('objection').Model

class Position extends Model {
  static get tableName () {
    return 'positions'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['title'],

      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 1, maxLength: 255 }
      }
    }
  }

  static get relationMappings () {
    const Employee = require('./employee')
    const JobPosting = require('./job_posting')
    return {
      employees: {
        relation: Model.HasManyRelation,
        modelClass: Employee,
        join: {
          from: 'employees.position',
          to: 'positions.id'
        }
      },

      job_postings: {
        relation: Model.BelongsToOneRelation,
        modelClass: JobPosting,
        join: {
          from: 'job_postings.position',
          to: 'positions.id'
        }
      }
    }
  }
}
module.exports = Position
