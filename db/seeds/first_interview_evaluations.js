exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('interview_evaluations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('interview_evaluations').insert([
        {
          guid: '45c78216-2570-451e-8f8e-471ced07dda2',
          notes: 'Sandoval',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          question: '57694d4b-dd79-4d04-b64a-b00d36fe5e45',
          application: '9964d79c-0edd-4aec-b9ca-af64c66569a1',
          points_provided: 4,
          created_at: '2015-04-30T12:51:48 +04:00',
          updated_at: '2018-04-23T01:58:42 +04:00'
        },
        {
          guid: 'fc4fc46d-5cd2-4e14-af43-2b9017984ce6',
          notes: 'Kemp',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          question: 'cdd457bd-d93e-469a-a1ee-6ca5d4028324',
          application: '9964d79c-0edd-4aec-b9ca-af64c66569a1',
          points_provided: 6,
          created_at: '2015-04-10T02:29:01 +04:00',
          updated_at: '2018-05-06T10:22:04 +04:00'
        },
        {
          guid: '8720a346-dff0-4d16-91ca-cfa8014763d0',
          notes: 'Morrison',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          question: '5ac8a6cc-71ff-473e-ac32-91aeb7d78e47',
          application: '9964d79c-0edd-4aec-b9ca-af64c66569a1',
          points_provided: 8,
          created_at: '2016-08-02T09:05:47 +04:00',
          updated_at: '2016-03-21T09:18:05 +04:00'
        },
        {
          guid: 'd48e8608-7aad-4b51-9e07-9d89e4db332a',
          notes: 'Gonzalez',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          question: '521a1a6c-2256-4f0e-a692-ae4cc0aa6eab',
          application: '9964d79c-0edd-4aec-b9ca-af64c66569a1',
          points_provided: 6,
          created_at: '2017-02-21T09:14:41 +05:00',
          updated_at: '2015-07-25T09:19:40 +04:00'
        },
        {
          guid: 'efc78ffd-e91d-45ae-89ee-4494a06a71c4',
          notes: 'Fox',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          question: 'a4ece821-b159-4e4a-ab2e-1e890cb82998',
          application: '9964d79c-0edd-4aec-b9ca-af64c66569a1',
          points_provided: 2,
          created_at: '2016-02-26T03:18:41 +05:00',
          updated_at: '2017-12-23T08:43:27 +05:00'
        },
        {
          guid: '7d11a85d-08f7-4a9c-9e0c-bcd888742327',
          notes: 'Reid',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          question: '5bcd8ba5-5bd4-49d9-bc87-321101a1f20a',
          application: '9964d79c-0edd-4aec-b9ca-af64c66569a1',
          points_provided: 8,
          created_at: '2015-04-13T11:16:42 +04:00',
          updated_at: '2016-08-03T05:09:05 +04:00'
        }
      ])
    })
}
