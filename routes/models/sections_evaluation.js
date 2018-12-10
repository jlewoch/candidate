const Model = require('objection').Model

class SectionEvaluation extends Model {
  static get tableName () {
    return 'section_evaluations'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['f_name', 'l_name'],

      properties: {
        id: { type: 'integer' },
        total_grade: { type: 'integer', min: 0, max: 100 },
        skipped: { type: 'boolean' },
        step: { type: 'integer' },
        application: { type: 'integer' }
      }
    }
  }
}
module.exports = SectionEvaluation
