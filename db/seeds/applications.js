exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('applications')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('applications').insert([
        {
          guid: '9964d79c-0edd-4aec-b9ca-af64c66569a1',
          applicant: 'dcc8807e-3e1a-430b-8802-af962735bb8a',
          position: 'c4e7f6fd-1d88-48a0-abc9-a4bea4e45bed',
          enabled: true,
          status: 0,
          created_at: '2014-04-14T05:51:30 +04:00',
          updated_at: '2015-10-28T03:22:57 +04:00'
        },
        {
          guid: 'fe26397e-8214-4749-b18d-8496bd6cc248',
          applicant: 'cc7e7337-88d3-4412-84a3-f2fb02feb53f',
          position: 'c4e7f6fd-1d88-48a0-abc9-a4bea4e45bed',
          enabled: true,
          status: 0,
          created_at: '2014-04-14T05:51:30 +04:00',
          updated_at: '2015-10-28T03:22:57 +04:00'
        },
        {
          guid: '08e145a1-8fb7-476f-a548-f930da515b24',
          applicant: '53a36a39-e927-4298-83c6-0c0bb6d7d365',
          position: '8586ca0e-f3b7-4a4f-a143-fffb9ed5823d',
          enabled: true,
          status: 0,
          created_at: '2014-04-14T05:51:30 +04:00',
          updated_at: '2015-10-28T03:22:57 +04:00'
        },
        {
          guid: 'f4a9f5b0-91ff-44d6-94f6-17f811abe4be',
          applicant: '08fa650a-f220-49d3-b8d4-72f5580a99a9',
          position: '7a0516a6-954d-465b-9b0d-7482f8537965',
          enabled: true,
          status: 0,
          created_at: '2014-04-14T05:51:30 +04:00',
          updated_at: '2015-10-28T03:22:57 +04:00'
        },
        {
          guid: 'c32a60c3-5979-4bc4-941b-80a7913fd6fc',
          applicant: '29f725cd-c6fa-4bb6-bbc3-c664059d8723',
          position: '04fc3b54-9bf5-4d44-8782-2b2ac68a1055',
          enabled: true,
          status: 0,
          created_at: '2014-04-14T05:51:30 +04:00',
          updated_at: '2015-10-28T03:22:57 +04:00'
        },
        {
          guid: 'c92a5597-e483-473d-b7ee-a550f98722c3',
          applicant: 'bbcfa81d-4e7a-469d-b0ef-ca15338a914b',
          position: '4c604141-a9f2-4fe7-a3b9-36e0a6c68bf3',
          enabled: true,
          status: 0,
          created_at: '2014-04-14T05:51:30 +04:00',
          updated_at: '2015-10-28T03:22:57 +04:00'
        }
      ])
    })
}
