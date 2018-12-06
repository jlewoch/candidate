exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('jobs')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {
          title: 'Web Developer',
          openings: 1,
          priority: 1,
          assigned_to: 0,
          created_by: 0,
          updated_by: 0,
          open_date: '2016-10-26T05:31:12 +04:00',
          close_date: '2017-06-05T04:19:34 +04:00'
        },
        {
          title: 'Recruiter',
          openings: 8,
          priority: 1,
          assigned_to: 0,
          created_by: 0,
          updated_by: 0,
          open_date: '2017-09-04T07:56:30 +04:00',
          close_date: '2018-05-29T04:51:46 +04:00'
        },
        {
          title: 'Accountant',
          openings: 1,
          priority: 2,
          assigned_to: 0,
          created_by: 0,
          updated_by: 0,
          open_date: '2016-02-24T04:09:43 +05:00',
          close_date: '2015-08-07T07:12:50 +04:00'
        },
        {
          title: 'Technical Analyst',
          openings: 6,
          priority: 2,
          assigned_to: 0,
          created_by: 0,
          updated_by: 0,
          open_date: '2016-03-15T06:52:12 +04:00',
          close_date: '2016-11-25T03:42:58 +05:00'
        },
        {
          title: 'Receptionist',
          openings: 1,
          priority: 2,
          assigned_to: 0,
          created_by: 0,
          updated_by: 0,
          open_date: '2015-11-20T10:53:32 +05:00',
          close_date: '2015-02-04T05:35:30 +05:00'
        }
      ])
    })
}
