exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          guid: 'f72fbb9a-3795-402b-b4b1-9ccbf9c65c13',
          description: 'Resume Review',
          required: true,
          level: 0,
          weight: 20,
          created_by: '8201a600-6398-4e26-b94b-858a33694f98',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          created_at: '2018-07-04T08:52:25 +04:00',
          updated_at: '2018-11-24T04:19:03 +05:00'
        },
        {
          guid: '2d16d154-6c12-4164-9656-ce40587707e2',
          description: 'Phone Screening',
          required: true,
          level: 1,
          weight: 20,
          created_by: '8201a600-6398-4e26-b94b-858a33694f98',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          created_at: '2014-03-03T11:41:17 +05:00',
          updated_at: '2017-07-16T11:17:30 +04:00'
        },
        {
          guid: '997cf217-090d-4487-9a5b-91ae5ca1b57c',
          description: 'First Interview',
          required: true,
          level: 3,
          weight: 20,
          created_by: '8201a600-6398-4e26-b94b-858a33694f98',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          created_at: '2017-07-18T04:43:16 +04:00',
          updated_at: '2018-06-12T08:41:19 +04:00'
        },
        {
          guid: 'c0ddf6d6-3b6d-4028-b762-9632e03ec793',
          description: 'Second Interview',
          required: true,
          level: 4,
          weight: 20,
          created_by: '8201a600-6398-4e26-b94b-858a33694f98',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          created_at: '2015-10-04T03:51:27 +04:00',
          updated_at: '2017-07-01T07:55:26 +04:00'
        },
        {
          guid: '90d4caf4-1d44-41a0-823b-8a58b96fdf83',
          description: 'Assesment',
          required: false,
          level: 2,
          weight: 20,
          created_by: '8201a600-6398-4e26-b94b-858a33694f98',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          created_at: '2014-04-14T05:51:30 +04:00',
          updated_at: '2015-10-28T03:22:57 +04:00'
        }
      ])
    })
}
