const Model = require('objection').Model
class AccountLevel extends Model {
  static get tableName () {
    return 'account_levels'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['name', 'level'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string' },
        level: { type: 'integer' },
        updated_by: { type: 'integer' },
        created_by: { type: 'integer' },
        updated_at: { type: 'dateTime' },
        created_at: { type: 'dateTime' }
      }
    }
  }

  static get relationMappings () {
    const Account = require('./account')

    return {
      account: {
        relation: Model.HasManyRelation,
        modelClass: Account,
        join: {
          from: 'account_levels.id',
          to: 'accounts.account_level'
        }
      }
    }
  }
}
module.exports = AccountLevel
