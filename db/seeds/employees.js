exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('employees')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {
          manager: 0,
          enabled: true,
          account: 0,
          department: 1,
          f_name: 'Cochran',
          l_name: 'Mckay',
          email: 'cochranmckay@gadtron.com',
          phone: 7052207436,
          created_by: 0,
          updated_by: 0
        }
      ])
    })
}
