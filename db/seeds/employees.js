exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('employees')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {
          enabled: true,
          f_name: 'Ramsey',
          l_name: 'Huff',
          email: 'ramseyhuff@earthpure.com',
          phone: 8075182072,
          created_by: 7,
          updated_by: 2,
          address: 3,
          department: 2,
          manager: 3,
          position: 1,
          account: 10
        },
        {
          enabled: true,
          f_name: 'Velez',
          l_name: 'Turner',
          email: 'velezturner@earthpure.com',
          phone: 8595432356,
          created_by: 2,
          updated_by: 9,
          address: 4,
          department: 5,
          manager: 1,
          position: 1,
          account: 1
        },
        {
          enabled: true,
          f_name: 'Hammond',
          l_name: 'Padilla',
          email: 'hammondpadilla@earthpure.com',
          phone: 9134762908,
          created_by: 3,
          updated_by: 5,
          address: 10,
          department: 2,
          manager: 1,
          position: 1,
          account: 2
        },
        {
          enabled: true,
          f_name: 'Mckinney',
          l_name: 'Erickson',
          email: 'mckinneyerickson@earthpure.com',
          phone: 9564763404,
          created_by: 5,
          updated_by: 4,
          address: 6,
          department: 2,
          manager: 1,
          position: 2,
          account: 3
        },
        {
          enabled: true,
          f_name: 'Fannie',
          l_name: 'Hicks',
          email: 'fanniehicks@earthpure.com',
          phone: 8445142667,
          created_by: 4,
          updated_by: 7,
          address: 1,
          department: 1,
          manager: 1,
          position: 2,
          account: 4
        },
        {
          enabled: false,
          f_name: 'Lilian',
          l_name: 'Haynes',
          email: 'lilianhaynes@earthpure.com',
          phone: 9084133251,
          created_by: 8,
          updated_by: 10,
          address: 6,
          department: 2,
          manager: 1,
          position: 3,
          account: 5
        },
        {
          enabled: true,
          f_name: 'Chrystal',
          l_name: 'Best',
          email: 'chrystalbest@earthpure.com',
          phone: 8325053831,
          created_by: 5,
          updated_by: 10,
          address: 9,
          department: 2,
          manager: 1,
          position: 3,
          account: 6
        },
        {
          enabled: true,
          f_name: 'Shepard',
          l_name: 'Robertson',
          email: 'shepardrobertson@earthpure.com',
          phone: 8394842913,
          created_by: 8,
          updated_by: 1,
          address: 10,
          department: 2,
          manager: 10,
          position: 4,
          account: 7
        },
        {
          enabled: true,
          f_name: 'Harmon',
          l_name: 'Patterson',
          email: 'harmonpatterson@earthpure.com',
          phone: 9904412649,
          created_by: 4,
          updated_by: 5,
          address: 4,
          department: 4,
          manager: 3,
          position: 4,
          account: 8
        },
        {
          enabled: true,
          f_name: 'Clayton',
          l_name: 'West',
          email: 'claytonwest@earthpure.com',
          phone: 9334053836,
          created_by: 9,
          updated_by: 4,
          address: 1,
          department: 4,
          manager: 10,
          position: 1,
          account: 9
        }
      ])
    })
}
