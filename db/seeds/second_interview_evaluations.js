exports.seed = async knex =>{
  // Deletes ALL existing entries
  return knex('second_interview_evaluations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('second_interview_evaluations').insert([])
    })
}
