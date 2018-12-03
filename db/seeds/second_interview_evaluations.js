exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('interview_evaluations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('interview_evaluations').insert([])
    })
}
