exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('accounts')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        {
          username: 'Christi',
          password: 'Suarez',
          enabled: false,
          locked: false,
          login_attempts: 2,
          account_level: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          username: 'Jimmie',
          password: 'Herring',
          enabled: true,
          locked: false,
          login_attempts: 2,
          account_level: 3,
          created_by: 4,
          updated_by: 8
        },
        {
          username: 'Sanders',
          password: 'Conrad',
          enabled: false,
          locked: false,
          login_attempts: 4,
          account_level: 3,
          created_by: 7,
          updated_by: 3
        },
        {
          username: 'Mcclain',
          password: 'Brock',
          enabled: true,
          locked: true,
          login_attempts: 1,
          account_level: 1,
          created_by: 10,
          updated_by: 4
        },
        {
          username: 'Stanton',
          password: 'Richardson',
          enabled: false,
          locked: false,
          login_attempts: 5,
          account_level: 1,
          created_by: 5,
          updated_by: 3
        },
        {
          username: 'Melanie',
          password: 'Briggs',
          enabled: false,
          locked: true,
          login_attempts: 5,
          account_level: 3,
          created_by: 5,
          updated_by: 4
        },
        {
          username: 'Mercedes',
          password: 'Grant',
          enabled: true,
          locked: false,
          login_attempts: 1,
          account_level: 2,
          created_by: 8,
          updated_by: 4
        },
        {
          username: 'Pansy',
          password: 'Byrd',
          enabled: true,
          locked: true,
          login_attempts: 1,
          account_level: 3,
          created_by: 3,
          updated_by: 5
        },
        {
          username: 'Mccullough',
          password: 'Monroe',
          enabled: true,
          locked: true,
          login_attempts: 1,
          account_level: 1,
          created_by: 6,
          updated_by: 5
        },
        {
          username: 'Rosalinda',
          password: 'Nash',
          enabled: true,
          locked: false,
          login_attempts: 5,
          account_level: 3,
          created_by: 2,
          updated_by: 9
        }
      ])
    })
}
