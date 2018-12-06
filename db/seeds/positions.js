exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('positions')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('positions').insert([
        {
          title: 'Web Developer',
          created_by: 0,
          updated_by: 0
        },
        {
          title: 'Recruiter',
          created_by: 0,
          updated_by: 0
        },
        {
          title: 'Accountant',
          created_by: 0,
          updated_by: 0
        },
        {
          title: 'Technical Analyst',
          created_by: 0,
          updated_by: 0
        },
        {
          title: 'Receptionist',
          created_by: 0,
          updated_by: 0
        }
      ])
    })
}
