exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('applicants')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('applicants').insert([
        {
          f_name: 'Isabelle',
          l_name: 'Kirk',
          phone: 9875443713,
          email: 'leannahodges@kiggle.com',
          created_by: 0,
          updated_by: 0
        },
        {
          f_name: 'Goodman',
          l_name: 'Potts',
          phone: 8765583884,
          email: 'judithroth@xsports.com',
          created_by: 0,
          updated_by: 0
        },
        {
          f_name: 'Blackwell',
          l_name: 'Maddox',
          phone: 8324482731,
          email: 'patriciagreer@geekwagon.com',
          created_by: 0,
          updated_by: 0
        },
        {
          f_name: 'Winifred',
          l_name: 'Marks',
          phone: 9674392168,
          email: 'juanasalazar@soprano.com',
          created_by: 0,
          updated_by: 0
        },
        {
          f_name: 'Lessie',
          l_name: 'Schwartz',
          phone: 9765422831,
          email: 'kramerdale@zillacon.com',
          created_by: 0,
          updated_by: 0
        }
      ])
    })
}
