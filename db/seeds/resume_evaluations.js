exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('resume_evaluations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('resume_evaluations').insert([])
    })
}
