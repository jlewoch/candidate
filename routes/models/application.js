const Model = require('objection').Model

class Application extends Model {
  static get tableName () {
    return 'applications'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['f_name', 'l_name'],

      properties: {
        id: { type: 'integer' },
        total_grade: { type: 'integer' },
        job_posting: { type: 'integer' },
        applicant: { type: 'integer' },
        status: { type: 'integer' }
      }
    }
  }

  static get relationMappings () {
    const JobPosting = require('./job_posting')
    const Applicant = require('./applicant')
    return {
      applicant: {
        relation: Model.BelongsToOneRelation,
        modelClass: Applicant,
        join: {
          from: 'applications.applicant',
          to: 'applicants.id'
        }
      },

      job_posting: {
        relation: Model.BelongsToOneRelation,
        modelClass: JobPosting,
        join: {
          from: 'application.job_posting',

          to: 'job_postings.id'
        }
      }
    }
  }
}
module.exports = Application
