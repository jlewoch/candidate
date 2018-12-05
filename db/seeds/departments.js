exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          guid: 'd43a5775-72bd-4b8d-b393-513dadbe0e07',
          name: 'Sales',
          created_by: '8201a600-6398-4e26-b94b-858a33694f98',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          created_at: '2018-10-11T09:36:29 +04:00',
          updated_at: '2015-12-06T08:18:24 +05:00'
        },
        {
          guid: '2fb843fd-c855-4795-bdbc-ffad1f05d861',
          name: 'Accounting',
          created_by: '8201a600-6398-4e26-b94b-858a33694f98',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          created_at: '2015-12-08T06:31:14 +05:00',
          updated_at: '2014-07-16T07:10:44 +04:00'
        },
        {
          guid: 'a1ccd0ac-c7ec-458a-81e9-8e5c06ae555f',
          name: 'Human Resources',
          created_by: '8201a600-6398-4e26-b94b-858a33694f98',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          created_at: '2018-10-27T01:09:06 +04:00',
          updated_at: '2016-10-31T11:03:27 +04:00'
        },
        {
          guid: 'f7feda69-1958-44e4-9dc2-cdd879ccbfb6',
          name: 'Solutions',
          created_by: '8201a600-6398-4e26-b94b-858a33694f98',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          created_at: '2017-08-12T06:24:16 +04:00',
          updated_at: '2014-02-21T09:05:19 +05:00'
        },
        {
          guid: '855314b6-7f4c-4aa0-8785-f15c78fb1cb1',
          name: 'Operations',
          created_by: '8201a600-6398-4e26-b94b-858a33694f98',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          created_at: '2014-08-04T03:31:39 +04:00',
          updated_at: '2017-01-28T12:38:54 +05:00'
        },
        {
          guid: '6f10c670-fb28-4428-921f-7f420eace0d9',
          name: 'Compliance',
          created_by: '8201a600-6398-4e26-b94b-858a33694f98',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          created_at: '2015-08-03T03:57:39 +04:00',
          updated_at: '2017-07-27T02:44:15 +04:00'
        },
        {
          guid: 'cfa7cfe1-ece2-46da-a62d-945acc2261f0',
          name: 'Customer Service',
          created_by: '8201a600-6398-4e26-b94b-858a33694f98',
          updated_by: '8201a600-6398-4e26-b94b-858a33694f98',
          created_at: '2018-05-27T10:42:18 +04:00',
          updated_at: '2017-09-09T12:53:37 +04:00'
        }
      ])
    })
}
