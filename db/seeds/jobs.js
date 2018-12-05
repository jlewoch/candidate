exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          guid: '4c604141-a9f2-4fe7-a3b9-36e0a6c68bf3',
          title: 'Web Developer',
          openings: 1,
          priority: 1,
          assigned_to: '8201a600-6398-4e26-b94b-858a33694f98',
          created_at: '2015-07-09T09:17:14 +04:00',
          updated_at: '2018-09-08T04:55:42 +04:00',
          open_date: '2016-10-26T05:31:12 +04:00',
          close_date: '2017-06-05T04:19:34 +04:00'
        },
        {
          guid: '04fc3b54-9bf5-4d44-8782-2b2ac68a1055',
          title: 'Recruiter',
          openings: 8,
          priority: 1,
          assigned_to: '8201a600-6398-4e26-b94b-858a33694f98',
          created_at: '2015-05-29T06:57:34 +04:00',
          updated_at: '2016-02-06T08:03:11 +05:00',
          open_date: '2017-09-04T07:56:30 +04:00',
          close_date: '2018-05-29T04:51:46 +04:00'
        },
        {
          guid: '7a0516a6-954d-465b-9b0d-7482f8537965',
          title: 'Accountant',
          openings: 1,
          priority: 2,
          assigned_to: '8201a600-6398-4e26-b94b-858a33694f98',
          created_at: '2014-06-20T05:39:52 +04:00',
          updated_at: '2014-07-30T04:49:57 +04:00',
          open_date: '2016-02-24T04:09:43 +05:00',
          close_date: '2015-08-07T07:12:50 +04:00'
        },
        {
          guid: '8586ca0e-f3b7-4a4f-a143-fffb9ed5823d',
          title: 'Technical Analyst',
          openings: 6,
          priority: 2,
          assigned_to: '8201a600-6398-4e26-b94b-858a33694f98',
          created_at: '2018-06-01T06:25:09 +04:00',
          updated_at: '2014-01-08T05:49:34 +05:00',
          open_date: '2016-03-15T06:52:12 +04:00',
          close_date: '2016-11-25T03:42:58 +05:00'
        },
        {
          guid: 'c4e7f6fd-1d88-48a0-abc9-a4bea4e45bed',
          title: 'Receptionist',
          openings: 1,
          priority: 2,
          assigned_to: '8201a600-6398-4e26-b94b-858a33694f98',
          created_at: '2017-02-25T02:14:02 +05:00',
          updated_at: '2014-12-28T02:12:57 +05:00',
          open_date: '2015-11-20T10:53:32 +05:00',
          close_date: '2015-02-04T05:35:30 +05:00'
        }
      ])
    })
}
