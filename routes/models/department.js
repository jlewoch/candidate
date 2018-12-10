const Model = require('objection').Model
class Department extends Model {
  static get tableName () {
    return 'departments'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 }
      }
    }
  }

  static get relationMappings () {
    const Employee = require('./employee')

    return {
      employees: {
        relation: Model.HasManyRelation,
        modelClass: Employee,
        join: {
          from: 'employees.department',
          to: 'departments.id'
        }
      }
    }
  }
}
module.exports = Department
