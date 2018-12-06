exports.seed = async knex =>{
  // Deletes ALL existing entries
  return knex('section_evaluations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('section_evaluations').insert([])
    })
}