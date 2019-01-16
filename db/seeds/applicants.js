exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('applicants')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('applicants').insert([
        {
          f_name: 'Bell',
          l_name: 'Lucas',
          email: 'belllucas@earthpure.com',
          phone: 8005693619,
          created_by: 5,
          updated_by: 9
        },
        {
          f_name: 'Benson',
          l_name: 'Hayden',
          email: 'bensonhayden@earthpure.com',
          phone: 9214633699,
          created_by: 8,
          updated_by: 10
        },
        {
          f_name: 'Olive',
          l_name: 'Hartman',
          email: 'olivehartman@earthpure.com',
          phone: 9564922634,
          created_by: 4,
          updated_by: 10
        },

        {
          f_name: 'Cleveland',
          l_name: 'Fitzpatrick',
          email: 'clevelandfitzpatrick@earthpure.com',
          phone: 8124503615,
          created_by: 7,
          updated_by: 5
        },
        {
          f_name: 'Savage',
          l_name: 'Sanders',
          email: 'savagesanders@earthpure.com',
          phone: 8805153751,
          created_by: 1,
          updated_by: 8
        },
        {
          f_name: 'Colon',
          l_name: 'Weaver',
          email: 'colonweaver@earthpure.com',
          phone: 8875462281,
          created_by: 8,
          updated_by: 3
        },
        {
          f_name: 'Ruby',
          l_name: 'Richmond',
          email: 'rubyrichmond@earthpure.com',
          phone: 8724982223,
          created_by: 5,
          updated_by: 1
        },
        {
          f_name: 'Carrie',
          l_name: 'Franco',
          email: 'carriefranco@earthpure.com',
          phone: 9295673612,
          created_by: 3,
          updated_by: 9
        },
        {
          f_name: 'Christine',
          l_name: 'Salas',
          email: 'christinesalas@earthpure.com',
          phone: 9444873190,
          created_by: 7,
          updated_by: 5
        },
        {
          f_name: 'Ollie',
          l_name: 'Tillman',
          email: 'ollietillman@earthpure.com',
          phone: 9944842940,
          created_by: 4,
          updated_by: 3
        },
        {
          f_name: 'Latonya',
          l_name: 'Villarreal',
          email: 'latonyavillarreal@earthpure.com',
          phone: 8885302327,
          created_by: 1,
          updated_by: 4
        },
        {
          f_name: 'Yates',
          l_name: 'Rogers',
          email: 'yatesrogers@earthpure.com',
          phone: 9865033765,
          created_by: 1,
          updated_by: 6
        },
        {
          f_name: 'Carey',
          l_name: 'Levy',
          email: 'careylevy@earthpure.com',
          phone: 8945202227,
          created_by: 6,
          updated_by: 3
        },
        {
          f_name: 'Myrna',
          l_name: 'Levine',
          email: 'myrnalevine@earthpure.com',
          phone: 8785773528,
          created_by: 6,
          updated_by: 5
        },
        {
          f_name: 'Rose',
          l_name: 'Cooley',
          email: 'rosecooley@earthpure.com',
          phone: 9064222455,
          created_by: 6,
          updated_by: 6
        },
        {
          f_name: 'Bonner',
          l_name: 'Douglas',
          email: 'bonnerdouglas@earthpure.com',
          phone: 9514773766,
          created_by: 3,
          updated_by: 9
        },
        {
          f_name: 'Michele',
          l_name: 'Joseph',
          email: 'michelejoseph@earthpure.com',
          phone: 8665453613,
          created_by: 8,
          updated_by: 8
        },
        {
          f_name: 'Sanford',
          l_name: 'Carlson',
          email: 'sanfordcarlson@earthpure.com',
          phone: 9934163117,
          created_by: 10,
          updated_by: 10
        },
        {
          f_name: 'Tammie',
          l_name: 'Nieves',
          email: 'tammienieves@earthpure.com',
          phone: 8565622273,
          created_by: 1,
          updated_by: 6
        },
        {
          f_name: 'Patton',
          l_name: 'Jacobson',
          email: 'pattonjacobson@earthpure.com',
          phone: 8334142772,
          created_by: 8,
          updated_by: 1
        },
        {
          f_name: 'Mitchell',
          l_name: 'Arnold',
          email: 'mitchellarnold@earthpure.com',
          phone: 8615743157,
          created_by: 3,
          updated_by: 4
        },
        {
          f_name: 'Madeline',
          l_name: 'Macias',
          email: 'madelinemacias@earthpure.com',
          phone: 9844553618,
          created_by: 5,
          updated_by: 10
        },
        {
          f_name: 'Lilia',
          l_name: 'Burnett',
          email: 'liliaburnett@earthpure.com',
          phone: 8605633714,
          created_by: 9,
          updated_by: 6
        },
        {
          f_name: 'Love',
          l_name: 'Foster',
          email: 'lovefoster@earthpure.com',
          phone: 8264493472,
          created_by: 2,
          updated_by: 3
        },
        {
          f_name: 'Edwina',
          l_name: 'Alexander',
          email: 'edwinaalexander@earthpure.com',
          phone: 9845813812,
          created_by: 4,
          updated_by: 2
        },
        {
          f_name: 'Perez',
          l_name: 'Wall',
          email: 'perezwall@earthpure.com',
          phone: 8724563489,
          created_by: 10,
          updated_by: 1
        },
        {
          f_name: 'Burris',
          l_name: 'Rollins',
          email: 'burrisrollins@earthpure.com',
          phone: 9964193684,
          created_by: 8,
          updated_by: 3
        },
        {
          f_name: 'Lela',
          l_name: 'Long',
          email: 'lelalong@earthpure.com',
          phone: 9204222066,
          created_by: 6,
          updated_by: 1
        },
        {
          f_name: 'Mueller',
          l_name: 'Emerson',
          email: 'muelleremerson@earthpure.com',
          phone: 9784553074,
          created_by: 6,
          updated_by: 7
        },
        {
          f_name: 'Donna',
          l_name: 'Byrd',
          email: 'donnabyrd@earthpure.com',
          phone: 8804162196,
          created_by: 4,
          updated_by: 10
        }
      ])
    })
}
