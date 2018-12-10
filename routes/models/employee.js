const Model = require('objection').Model

class Employee extends Model {
  static get tableName () {
    return 'employees'
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
      required: ['f_name', 'l_name', 'email', 'phone'],

      properties: {
        id: { type: 'integer' },
        f_name: { type: 'string', minLength: 1, maxLength: 255 },
        l_name: { type: 'string', minLength: 1, maxLength: 255 },
        phone: { type: 'integer', minLength: 10, maxLength: 10 },
        email: { type: 'string' },
        enabled: { type: 'boolean' },
        account: { type: 'integer' },
        position: { type: 'integer' },
        department: { type: 'integer' },
        manager: { type: 'integer' },
        address: { type: 'integer' }
      }
    }
  }

  static get relationMappings () {
    const Account = require('./account')
    const JobPosting = require('./job_posting')
    const Department = require('./department')
    return {
      account_info: {
        relation: Model.BelongsToOneRelation,
        modelClass: Account,
        join: {
          from: 'employees.account',
          to: 'accounts.id'
        }
      },

      department_info: {
        relation: Model.BelongsToOneRelation,
        modelClass: Department,
        join: {
          from: 'employees.id',

          to: 'departments.id'
        }
      },
      reporting_manager: {
        relation: Model.BelongsToOneRelation,
        modelClass: Employee,
        join: {
          from: 'employees.manager',
          to: 'employees.id'
        }
      },
      direct_reports: {
        relation: Model.HasManyRelation,
        modelClass: Employee,
        join: {
          from: 'employees.manager',
          to: 'employees.id'
        }
      },
      assigned: {
        relation: Model.HasManyRelation,
        modelClass: JobPosting,
        join: {
          from: 'employees.id',
          to: 'job_postings.assigned_to'
        }
      }
    }
  }
}
module.exports = Employee
