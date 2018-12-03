exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('account_levels')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('account_levels').insert([])
    })
}
