exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {
          guid: '8201a600-6398-4e26-b94b-858a33694f98',
          manager: '8201a600-6398-4e26-b94b-858a33694f98',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          active: true,
          department: 'f7feda69-1958-44e4-9dc2-cdd879ccbfb6',
          f_name: 'Cochran',
          l_name: 'Mckay',
          email: 'cochranmckay@gadtron.com',
          phone: '+1 (838) 473-3918',
          created_at: '2017-08-12T02:26:40 +04:00',
          updated_at: '2017-04-16T08:09:22 +04:00'
        }
      ])
    })
}
