const Model = require('objection').Model

class JobPosting extends Model {
  static get tableName () {
    return 'job_postings'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['position', 'open_date'],

      properties: {
        id: { type: 'integer' },
        priority: { type: 'integer' },
        close_date: { type: 'dateTime' },
        open_date: { type: 'dateTime' },
        position: { type: 'integer' },
        assigned_to: { type: 'integer' }
      }
    }
  }

  static get relationMappings () {
    const Employee = require('./employee')
    const Position = require('./position')
    const Application = require('./application')
    return {
      applications: {
        relation: Model.HasManyRelation,
        modelClass: Application,
        join: {
          from: 'job_postings.id',
          to: 'applications.job_postings'
        }
      },

      position_info: {
        relation: Model.BelongsToOneRelation,
        modelClass: Position,
        join: {
          from: 'job_postings.position',
          to: 'positions.id'
        }
      },

      assignee: {
        relation: Model.BelongsToOneRelation,
        modelClass: Employee,
        join: {
          from: 'job_postings.assigned_to',
          to: 'employees.id'
        }
      }
    }
  }
}
module.exports = JobPosting
