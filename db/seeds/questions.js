exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {
          guid: '57694d4b-dd79-4d04-b64a-b00d36fe5e45',
          question: 'Do they have the required skills',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          created_by: '8201a600-6398-4e26-b94b-858a33694f98',
          step: '997cf217-090d-4487-9a5b-91ae5ca1b57c',
          active: true,
          weight: 100,
          created_at: '2016-12-04T06:00:36 +05:00',
          updated_at: '2016-07-23T07:11:03 +04:00'
        },
        {
          guid: 'cdd457bd-d93e-469a-a1ee-6ca5d4028324',
          question: 'Would they fit in the company culture',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          created_by: '8201a600-6398-4e26-b94b-858a33694f98',
          step: '997cf217-090d-4487-9a5b-91ae5ca1b57c',
          active: true,
          weight: 51,
          created_at: '2014-08-11T03:25:43 +04:00',
          updated_at: '2016-03-07T10:46:46 +05:00'
        },
        {
          guid: '5bcd8ba5-5bd4-49d9-bc87-321101a1f20a',
          question: 'Do they have the Required Education',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          created_by: '8201a600-6398-4e26-b94b-858a33694f98',
          step: '997cf217-090d-4487-9a5b-91ae5ca1b57c',
          active: true,
          weight: 24,
          created_at: '2015-03-09T11:26:33 +04:00',
          updated_at: '2014-01-14T05:20:53 +05:00'
        },
        {
          guid: '5ac8a6cc-71ff-473e-ac32-91aeb7d78e47',
          question: 'Is the applicant genuine',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          created_by: '8201a600-6398-4e26-b94b-858a33694f98',
          step: '997cf217-090d-4487-9a5b-91ae5ca1b57c',
          active: true,
          weight: 44,
          created_at: '2017-10-14T11:41:05 +04:00',
          updated_at: '2017-05-13T02:41:03 +04:00'
        },
        {
          guid: '521a1a6c-2256-4f0e-a692-ae4cc0aa6eab',
          question: 'Is there any misleading informtation',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          created_by: '8201a600-6398-4e26-b94b-858a33694f98',
          step: '997cf217-090d-4487-9a5b-91ae5ca1b57c',
          active: true,
          weight: 100,
          created_at: '2017-04-03T11:47:32 +04:00',
          updated_at: '2017-05-24T06:11:32 +04:00'
        }
      ])
    })
}
