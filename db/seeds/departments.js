exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('departments')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('departments').insert([
        {
          name: 'Sales',
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Accounting',
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Human Resources',
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Solutions',
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Operations',
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Compliance',
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Customer Service',
          created_by: 1,
          updated_by: 1
        }
      ])
    })
}
