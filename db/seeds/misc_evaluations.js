exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('misc_evaluations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('misc_evaluations').insert([])
    })
}
