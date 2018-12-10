exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('applications')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('applications').insert([
        {
          total_grade: 78,
          status: 2,
          applicant: 30,
          job_posting: 1,
          created_by: 10,
          updated_by: 4
        },
        {
          total_grade: 42,
          status: 4,
          applicant: 1,
          job_posting: 4,
          created_by: 3,
          updated_by: 10
        },
        {
          total_grade: 25,
          status: 4,
          applicant: 2,
          job_posting: 2,
          created_by: 3,
          updated_by: 8
        },
        {
          total_grade: 38,
          status: 2,
          applicant: 3,
          job_posting: 1,
          created_by: 3,
          updated_by: 3
        },
        {
          total_grade: 80,
          status: 0,
          applicant: 4,
          job_posting: 3,
          created_by: 2,
          updated_by: 5
        },
        {
          total_grade: 69,
          status: 1,
          applicant: 5,
          job_posting: 5,
          created_by: 4,
          updated_by: 2
        },
        {
          total_grade: 92,
          status: 2,
          applicant: 6,
          job_posting: 2,
          created_by: 4,
          updated_by: 9
        },
        {
          total_grade: 34,
          status: 3,
          applicant: 7,
          job_posting: 3,
          created_by: 3,
          updated_by: 7
        },
        {
          total_grade: 44,
          status: 2,
          applicant: 8,
          job_posting: 5,
          created_by: 5,
          updated_by: 5
        },
        {
          total_grade: 2,
          status: 1,
          applicant: 9,
          job_posting: 2,
          created_by: 7,
          updated_by: 10
        },
        {
          total_grade: 60,
          status: 3,
          applicant: 10,
          job_posting: 3,
          created_by: 1,
          updated_by: 10
        },
        {
          total_grade: 52,
          status: 0,
          applicant: 11,
          job_posting: 3,
          created_by: 9,
          updated_by: 2
        },
        {
          total_grade: 38,
          status: 0,
          applicant: 12,
          job_posting: 3,
          created_by: 2,
          updated_by: 1
        },
        {
          total_grade: 72,
          status: 1,
          applicant: 13,
          job_posting: 5,
          created_by: 8,
          updated_by: 10
        },
        {
          total_grade: 55,
          status: 2,
          applicant: 14,
          job_posting: 4,
          created_by: 10,
          updated_by: 4
        },
        {
          total_grade: 76,
          status: 4,
          applicant: 15,
          job_posting: 5,
          created_by: 4,
          updated_by: 8
        },
        {
          total_grade: 5,
          status: 1,
          applicant: 16,
          job_posting: 5,
          created_by: 1,
          updated_by: 8
        },
        {
          total_grade: 7,
          status: 0,
          applicant: 17,
          job_posting: 2,
          created_by: 10,
          updated_by: 4
        },
        {
          total_grade: 83,
          status: 4,
          applicant: 18,
          job_posting: 5,
          created_by: 1,
          updated_by: 8
        },
        {
          total_grade: 89,
          status: 4,
          applicant: 19,
          job_posting: 4,
          created_by: 7,
          updated_by: 8
        },
        {
          total_grade: 77,
          status: 1,
          applicant: 20,
          job_posting: 1,
          created_by: 8,
          updated_by: 3
        },
        {
          total_grade: 43,
          status: 2,
          applicant: 21,
          job_posting: 4,
          created_by: 8,
          updated_by: 6
        },
        {
          total_grade: 4,
          status: 0,
          applicant: 22,
          job_posting: 1,
          created_by: 9,
          updated_by: 9
        },
        {
          total_grade: 39,
          status: 3,
          applicant: 23,
          job_posting: 3,
          created_by: 4,
          updated_by: 2
        },
        {
          total_grade: 67,
          status: 3,
          applicant: 24,
          job_posting: 1,
          created_by: 1,
          updated_by: 8
        },
        {
          total_grade: 73,
          status: 1,
          applicant: 25,
          job_posting: 3,
          created_by: 7,
          updated_by: 6
        },
        {
          total_grade: 15,
          status: 2,
          applicant: 26,
          job_posting: 1,
          created_by: 2,
          updated_by: 5
        },
        {
          total_grade: 77,
          status: 2,
          applicant: 27,
          job_posting: 3,
          created_by: 3,
          updated_by: 8
        },
        {
          total_grade: 66,
          status: 0,
          applicant: 28,
          job_posting: 5,
          created_by: 8,
          updated_by: 2
        },
        {
          total_grade: 82,
          status: 0,
          applicant: 29,
          job_posting: 5,
          created_by: 6,
          updated_by: 1
        }
      ])
    })
}
