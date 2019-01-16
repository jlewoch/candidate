exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('job_postings')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('job_postings').insert([
        {
          open_date: '2018-11-23T11:39:44',
          closing_date: '2018-02-23T05:09:33',
          title: 'hello',
          openings: 2,
          priority: 2,
          assigned_to: 6,
          created_by: 7,
          updated_by: 5
        },
        {
          open_date: '2018-05-22T05:13:06',
          closing_date: '2018-10-29T06:44:02',
          title: 'hello',
          openings: 1,
          priority: 3,
          assigned_to: 4,
          created_by: 6,
          updated_by: 2
        },
        {
          open_date: '2018-08-05T06:03:17',
          closing_date: '2018-10-08T06:04:43',
          title: 'hello',
          openings: 3,
          priority: 1,
          assigned_to: 3,
          created_by: 2,
          updated_by: 10
        },
        {
          open_date: '2018-11-03T02:41:35',
          closing_date: '2018-04-12T06:11:12',
          title: 'hello',
          openings: 3,
          priority: 3,
          assigned_to: 2,
          created_by: 2,
          updated_by: 5
        },
        {
          open_date: '2018-04-30T06:47:12',
          closing_date: '2018-06-03T09:01:36',
          title: 'hello',
          openings: 3,
          priority: 2,
          assigned_to: 2,
          created_by: 10,
          updated_by: 7
        }
      ])
    })
}
