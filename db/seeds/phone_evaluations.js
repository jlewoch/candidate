exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('phone_evaluations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('phone_evaluations').insert([])
    })
}
