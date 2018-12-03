exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('applicants')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('applicants').insert([
        {
          guid: 'bbcfa81d-4e7a-469d-b0ef-ca15338a914b',
          f_name: 'Isabelle',
          l_name: 'Kirk',
          created_at: '2016-02-25T04:34:01 +05:00',
          updated_at: '2017-02-14T06:21:57 +05:00'
        },
        {
          guid: '29f725cd-c6fa-4bb6-bbc3-c664059d8723',
          f_name: 'Goodman',
          l_name: 'Potts',
          created_at: '2016-07-23T02:08:44 +04:00',
          updated_at: '2016-05-05T04:30:29 +04:00'
        },
        {
          guid: '08fa650a-f220-49d3-b8d4-72f5580a99a9',
          f_name: 'Blackwell',
          l_name: 'Maddox',
          created_at: '2018-10-20T11:44:31 +04:00',
          updated_at: '2016-01-27T02:14:30 +05:00'
        },
        {
          guid: '53a36a39-e927-4298-83c6-0c0bb6d7d365',
          f_name: 'Winifred',
          l_name: 'Marks',
          created_at: '2018-06-24T03:29:54 +04:00',
          updated_at: '2015-11-24T03:46:11 +05:00'
        },
        {
          guid: 'cc7e7337-88d3-4412-84a3-f2fb02feb53f',
          f_name: 'Lessie',
          l_name: 'Schwartz',
          created_at: '2015-10-25T06:32:58 +04:00',
          updated_at: '2016-07-26T11:02:56 +04:00'
        },
        {
          guid: 'dcc8807e-3e1a-430b-8802-af962735bb8a',
          f_name: 'Bradford',
          l_name: 'Haley',
          created_at: '2014-02-17T06:44:52 +05:00',
          updated_at: '2018-06-05T09:58:00 +04:00'
        }
      ])
    })
}
