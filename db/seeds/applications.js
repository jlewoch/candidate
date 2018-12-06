exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('applications')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('applications').insert([
        {
          applicant: 0,
          job: 0,
          enabled: true,
          status: 0,
          created_by: 0,
          updated_by: 0
        },
        {
          applicant: 1,
          job: 1,
          enabled: true,
          status: 0,
          created_by: 0,
          updated_by: 0
        },
        {
          applicant: 2,
          job: 0,
          enabled: true,
          status: 0,
          created_by: 0,
          updated_by: 0
        },
        {
          applicant: 3,
          job: 0,
          enabled: true,
          status: 0,
          created_by: 0,
          updated_by: 0
        },
        {
          applicant: 0,
          job: 1,
          enabled: true,
          status: 0,
          created_by: 0,
          updated_by: 0
        },
        {
          applicant: 1,
          job: 0,
          enabled: true,
          status: 0,
          created_by: 0,
          updated_by: 0
        }
      ])
    })
}
