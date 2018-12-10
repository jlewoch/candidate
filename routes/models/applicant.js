const Model = require('objection').Model
class Applicant extends Model {
  static get tableName () {
    return 'applicants'
  }
  static get virtualAttributes () {
    return ['fullName']
  }
  fullName () {
    return `${this.f_name} ${this.l_name}`
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['f_name', 'l_name', 'phone', 'email'],

      properties: {
        id: { type: 'integer' },
        f_name: { type: 'string', minLength: 1, maxLength: 255 },
        l_name: { type: 'string', minLength: 1, maxLength: 255 },
        phone: { type: 'integer', minLength: 10, maxLength: 10 },
        email: { type: 'string' }
      }
    }
  }

  static get relationMappings () {
    const Application = require('./application')

    return {
      applications: {
        relation: Model.HasManyRelation,
        modelClass: Application,
        join: {
          from: 'applications.applicant',
          to: 'applicants.id'
        }
      }
    }
  }
}
module.exports = Applicant
