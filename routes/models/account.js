const Model = require('objection').Model

class Account extends Model {
  static get tableName () {
    return 'accounts'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['username', 'password', 'account_level'],

      properties: {
        id: { type: 'integer' },
        username: { type: 'string', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 1, maxLength: 255 },
        enabled: { type: 'boolean' },
        locked: { type: 'boolean' },
        login_attempts: { type: 'integer' },
        account_level: { type: 'integer' }
      }
    }
  }

  static get relationMappings () {
    const Employee = require('./employee')
    const AccountLevel = require('./account_level')
    return {
      account_level_info: {
        relation: Model.BelongsToOneRelation,
        modelClass: AccountLevel,
        join: {
          from: 'accounts.account_level',
          to: 'account_levels.id'
        }
      },

      employee: {
        relation: Model.BelongsToOneRelation,
        modelClass: Employee,
        join: {
          from: 'accounts.id',
          to: 'employees.account'
        }
      }
    }
  }
}
module.exports = Account
