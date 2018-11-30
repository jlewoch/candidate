export const positions = [
  {
    id: 1,
    title: 'Technical Specialist',
    openingDate: '2018-08-10T04:00:00.000Z',
    closingDate: '2018-08-22T04:00:00.000Z',
    priority: 'HIGH',
    assignedTo: 'Jake Lewochko',
    totalApplications: 36,
    location: 'Toronto, ON'
  },
  {
    id: 2,
    title: 'Technical analyst',
    openingDate: '2018-08-10T04:00:00.000Z',
    closingDate: '2018-08-22T04:00:00.000Z',
    priority: 'Future',
    assignedTo: 'Jake Lewochko',
    totalApplications: 36,
    location: 'Toronto, ON'
  },
  {
    id: 3,
    title: 'accounting',
    openingDate: '2018-08-10T04:00:00.000Z',
    closingDate: '2018-08-22T04:00:00.000Z',
    priority: 'Future',
    assignedTo: 'Jake Lewochko',
    totalApplications: 36,
    location: 'Toronto, ON'
  },
  {
    id: 4,
    title: 'manager',
    openingDate: '2018-08-10T04:00:00.000Z',
    closingDate: '2018-08-22T04:00:00.000Z',
    priority: 'Normal',
    assignedTo: 'Jake Lewochko',
    totalApplications: 36,
    location: 'Toronto, ON'
  }
]

export const applicants = [
  {
    id: 1,
    fName: 'kim',
    lName: 'chi',
    email: 'kimchi@me.com',
    createdAt: '2018-08-12T22:49:17.000Z',
    updatedAt: '2018-08-12T22:49:17.000Z'
  },
  {
    id: 2,
    fName: 'tom',
    lName: 'yum',
    email: 'tom.yum@soup.com',
    createdAt: '2018-08-12T23:07:43.000Z',
    updatedAt: '2018-08-12T23:07:43.000Z'
  },
  {
    id: 3,
    fName: 'derek',
    lName: 'simple',
    email: 'someemail@email.com',
    createdAt: '2018-08-18T21:58:02.000Z',
    updatedAt: '2018-08-18T21:58:02.000Z'
  },
  {
    id: 4,
    fName: 'rek',
    lName: 'sime',
    email: 'someail@email.com',
    createdAt: '2018-08-18T22:00:10.000Z',
    updatedAt: '2018-08-18T22:00:10.000Z'
  },
  {
    id: 5,
    fName: 'renkin',
    lName: 'simon',
    email: 'somil@email.com',
    createdAt: '2018-08-18T22:00:10.000Z',
    updatedAt: '2018-08-18T22:00:10.000Z'
  }
]

export const applications = [
  {
      "id": 1,
      "totalGrade": 8.7,
      "totalProvidedPoints": 29,
      "totalAvailablePoints": 50,
      "createdAt": "2018-08-12T23:02:56.000Z",
      "updatedAt": "2018-08-23T14:23:58.000Z",
      "applicantId": 1,
      "positionId": 1,
      "status": "Complete",
      "modifiedBy": 1,
      "currentStep": 4
  },
  {
      "id": 2,
      "totalGrade": 25,
      "totalProvidedPoints": 220,
      "totalAvailablePoints": 220,
      "createdAt": "2018-08-12T23:12:06.000Z",
      "updatedAt": "2018-08-23T14:26:31.000Z",
      "applicantId": 2,
      "positionId": 2,
      "status": "Complete",
      "modifiedBy": 1,
      "currentStep": 4
  },
  {
      "id": 3,
      "totalGrade": 3.3,
      "totalProvidedPoints": 11,
      "totalAvailablePoints": 50,
      "createdAt": "2018-08-12T23:12:27.000Z",
      "updatedAt": "2018-08-23T14:16:42.000Z",
      "applicantId": 1,
      "positionId": 2,
      "status": "In Progress",
      "modifiedBy": 1,
      "currentStep": 1
  },
  {
      "id": 4,
      "totalGrade": 20.3,
      "totalProvidedPoints": 97,
      "totalAvailablePoints": 110,
      "createdAt": "2018-08-18T22:25:47.000Z",
      "updatedAt": "2018-08-23T14:27:29.000Z",
      "applicantId": 4,
      "positionId": 3,
      "status": "Complete",
      "modifiedBy": 1,
      "currentStep": 4
  },
  {
      "id": 5,
      "totalGrade": 20.3,
      "totalProvidedPoints": 97,
      "totalAvailablePoints": 110,
      "createdAt": "2018-08-18T22:25:47.000Z",
      "updatedAt": "2018-08-23T14:27:29.000Z",
      "applicantId": 3,
      "positionId": 3,
      "status": "Complete",
      "modifiedBy": 1,
      "currentStep": 4
  }
]

export const users = [
  {
    id: 1,
    username: 'jlewoch',
    password: '$2b$07$IuMb.xEi8d5x.njEtDIFNO8gemKsmpb/hbi5eFJoy5bl9z4wxNJE.',
    loggedIn: 0,
    lastLoggedOn: null,
    failedAttempts: 0,
    locked: 0,
    passwordModifiedDate: '2018-08-13T19:53:08.000Z',
    active: 1,
    createdAt: '2018-08-13T19:53:08.000Z',
    updatedAt: '2018-08-13T19:53:08.000Z',
    createdBy: 0,
    modifiedBy: 0,
    employeeId: 1,
    accessLevel: 4
  },
  {
    id: 2,
    username: 'test',
    password: '$2b$07$iQ40KPgX5B0BdeOCn6vg1uXFWTv7COgs6Cxm6dIgnOu7ReKu/dEse',
    loggedIn: 0,
    lastLoggedOn: null,
    failedAttempts: 0,
    locked: 0,
    passwordModifiedDate: '2018-08-21T16:48:56.000Z',
    active: 1,
    createdAt: '2018-08-21T16:48:56.000Z',
    updatedAt: '2018-08-21T16:48:56.000Z',
    createdBy: 1,
    modifiedBy: 1,
    employeeId: 12,
    accessLevel: 1
  },
  {
    id: 3,
    username: 'testing123',
    password: '$2b$07$iQ40KPgX5B0BdeOCn6vg1uXFWTv7COgs6Cxm6dIgnOu7ReKu/dEse',
    loggedIn: 0,
    lastLoggedOn: 1,
    failedAttempts: 0,
    locked: 0,
    passwordModifiedDate: '2018-08-21T16:48:56.000Z',
    active: 1,
    createdAt: '2018-08-21T16:48:56.000Z',
    updatedAt: '2018-08-21T16:48:56.000Z',
    createdBy: 1,
    modifiedBy: 1,
    employeeId: 12,
    accessLevel: 1
  }
]

export const questions = [
  {
    id: 1,
    question: 'Does the candidate have the required skills?',
    weight: 20,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-11T01:28:52.000Z',
    updatedAt: '2018-08-11T01:28:52.000Z',
    stepProgressionLevel: 1,
    createdBy: 1,
    modifiedBy: 0
  },
  {
    id: 2,
    question: 'Does the candidate have the required certificate(s)?',
    weight: 20,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-11T01:29:13.000Z',
    updatedAt: '2018-08-11T01:29:13.000Z',
    stepProgressionLevel: 1,
    createdBy: 1,
    modifiedBy: 0
  },
  {
    id: 3,
    question: 'Does the candidate have the required education?',
    weight: 20,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-11T01:31:46.000Z',
    updatedAt: '2018-08-11T01:31:46.000Z',
    stepProgressionLevel: 1,
    createdBy: 1,
    modifiedBy: 0
  },
  {
    id: 4,
    question: 'Is the resume polished free of errors?',
    weight: 20,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-11T01:32:05.000Z',
    updatedAt: '2018-08-11T01:32:05.000Z',
    stepProgressionLevel: 1,
    createdBy: 1,
    modifiedBy: 0
  },
  {
    id: 5,
    question: 'Does the candidate have additional skills or abilities that would make them more of an asset?',
    weight: 20,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-11T01:32:05.000Z',
    updatedAt: '2018-08-11T01:32:05.000Z',
    stepProgressionLevel: 1,
    createdBy: 1,
    modifiedBy: 0
  },
  {
    id: 11,
    question: 'Does the candidate have the required work experience?',
    weight: 10,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-12T22:25:33.000Z',
    updatedAt: '2018-08-12T22:25:33.000Z',
    stepProgressionLevel: 2,
    createdBy: 2,
    modifiedBy: 0
  },
  {
    id: 12,
    question: 'Does the candidate have the required technical knowledge?',
    weight: 10,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-12T22:25:33.000Z',
    updatedAt: '2018-08-12T22:25:33.000Z',
    stepProgressionLevel: 2,
    createdBy: 2,
    modifiedBy: 0
  },
  {
    id: 13,
    question: 'Is the candidate available for the start date?',
    weight: 10,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-12T22:25:33.000Z',
    updatedAt: '2018-08-12T22:25:33.000Z',
    stepProgressionLevel: 2,
    createdBy: 2,
    modifiedBy: 0
  },
  {
    id: 14,
    question: "Does the candidates values align with the organisation's?",
    weight: 10,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-12T22:25:33.000Z',
    updatedAt: '2018-08-12T22:25:33.000Z',
    stepProgressionLevel: 2,
    createdBy: 2,
    modifiedBy: 0
  },
  {
    id: 15,
    question: 'Did the candidate research the company prior to the interview?',
    weight: 10,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-12T22:25:33.000Z',
    updatedAt: '2018-08-12T22:25:33.000Z',
    stepProgressionLevel: 2,
    createdBy: 2,
    modifiedBy: 0
  },
  {
    id: 16,
    question: 'Did the candidate answer relevant questions?',
    weight: 10,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-12T22:25:33.000Z',
    updatedAt: '2018-08-12T22:25:33.000Z',
    stepProgressionLevel: 2,
    createdBy: 2,
    modifiedBy: 0
  },
  {
    id: 17,
    question: 'Was the candidate punctual and ready for the interview?',
    weight: 10,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-12T22:25:33.000Z',
    updatedAt: '2018-08-12T22:25:33.000Z',
    stepProgressionLevel: 3,
    createdBy: 2,
    modifiedBy: 0
  },
  {
    id: 18,
    question: 'Did the candidate answer the technical questions to satisfaction?',
    weight: 10,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-12T22:25:33.000Z',
    updatedAt: '2018-08-12T22:25:33.000Z',
    stepProgressionLevel: 3,
    createdBy: 2,
    modifiedBy: 0
  },
  {
    id: 19,
    question: "Does the candidate's skills and abilities meet the position's expectations?",
    weight: 10,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-12T22:25:33.000Z',
    updatedAt: '2018-08-12T22:25:33.000Z',
    stepProgressionLevel: 3,
    createdBy: 2,
    modifiedBy: 0
  },
  {
    id: 20,
    question: 'How did the candidate perform on the case study?\n',
    weight: 10,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-12T22:25:33.000Z',
    updatedAt: '2018-08-12T22:25:33.000Z',
    stepProgressionLevel: 3,
    createdBy: 2,
    modifiedBy: 0
  },
  {
    id: 21,
    question: 'Did the candidate ask relevant questions?',
    weight: 20,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-12T22:31:00.000Z',
    updatedAt: '2018-08-12T22:31:00.000Z',
    stepProgressionLevel: 3,
    createdBy: 3,
    modifiedBy: 0
  },
  {
    id: 22,
    question: 'Was the candidate punctual and ready for the interview?',
    weight: 20,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-12T22:31:00.000Z',
    updatedAt: '2018-08-12T22:31:00.000Z',
    stepProgressionLevel: 4,
    createdBy: 3,
    modifiedBy: 0
  },
  {
    id: 23,
    question: 'Does the candidate show enthusiasm for the position?',
    weight: 20,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-12T22:31:00.000Z',
    updatedAt: '2018-08-12T22:31:00.000Z',
    stepProgressionLevel: 4,
    createdBy: 3,
    modifiedBy: 0
  },
  {
    id: 24,
    question: 'Does the candidate seem to be a good fit for the team?',
    weight: 15,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-12T22:31:00.000Z',
    updatedAt: '2018-08-12T22:31:00.000Z',
    stepProgressionLevel: 4,
    createdBy: 3,
    modifiedBy: 0
  },
  {
    id: 25,
    question: 'Did the candidate answer the behavioural questions to satisfaction?',
    weight: 15,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-12T22:31:00.000Z',
    updatedAt: '2018-08-12T22:31:00.000Z',
    stepProgressionLevel: 4,
    createdBy: 3,
    modifiedBy: 0
  },
  {
    id: 26,
    question: 'Does the candidate exhibit qualities of a team player?',
    weight: 10,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-12T22:34:08.000Z',
    updatedAt: '2018-08-12T22:34:08.000Z',
    stepProgressionLevel: 4,
    createdBy: 4,
    modifiedBy: 0
  },
  {
    id: 27,
    question: 'Did the candidate ask relevant questions?',
    weight: 20,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-12T22:34:08.000Z',
    updatedAt: '2018-08-12T22:34:08.000Z',
    stepProgressionLevel: 4,
    createdBy: 4,
    modifiedBy: 0
  },
  {
    id: 28,
    question: 'this is a test question',
    weight: 12,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-28T17:46:34.000Z',
    updatedAt: '2018-08-28T17:46:34.000Z',
    stepProgressionLevel: 1,
    createdBy: 1,
    modifiedBy: 1
  },
  {
    id: 29,
    question: 'this is a test question',
    weight: 23,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-28T17:48:22.000Z',
    updatedAt: '2018-08-28T17:48:22.000Z',
    stepProgressionLevel: 1,
    createdBy: 1,
    modifiedBy: 1
  },
  {
    id: 30,
    question: 'this is a test question',
    weight: 23,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-28T17:49:01.000Z',
    updatedAt: '2018-08-28T17:49:01.000Z',
    stepProgressionLevel: 1,
    createdBy: 1,
    modifiedBy: 1
  },
  {
    id: 31,
    question: 'this is a test question',
    weight: 12,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-28T17:53:31.000Z',
    updatedAt: '2018-08-28T17:53:31.000Z',
    stepProgressionLevel: 2,
    createdBy: 1,
    modifiedBy: 1
  },
  {
    id: 32,
    question: 'this is a test question',
    weight: 12,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-28T17:58:12.000Z',
    updatedAt: '2018-08-28T17:58:12.000Z',
    stepProgressionLevel: 1,
    createdBy: 1,
    modifiedBy: 1
  },
  {
    id: 33,
    question: 'this is a test question',
    weight: 12,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-28T18:01:37.000Z',
    updatedAt: '2018-08-28T18:01:37.000Z',
    stepProgressionLevel: 1,
    createdBy: 1,
    modifiedBy: 1
  },
  {
    id: 34,
    question: 'this is a test question',
    weight: 12,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-28T18:03:37.000Z',
    updatedAt: '2018-08-28T18:03:37.000Z',
    stepProgressionLevel: 1,
    createdBy: 1,
    modifiedBy: 1
  },
  {
    id: 35,
    question: 'this is a test question',
    weight: 12,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-28T18:07:30.000Z',
    updatedAt: '2018-08-28T18:07:30.000Z',
    stepProgressionLevel: 2,
    createdBy: 1,
    modifiedBy: 1
  },
  {
    id: 36,
    question: 'this is a test question',
    weight: 12,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-28T18:08:46.000Z',
    updatedAt: '2018-08-28T18:08:46.000Z',
    stepProgressionLevel: 1,
    createdBy: 1,
    modifiedBy: 1
  },
  {
    id: 37,
    question: 'this is a test question',
    weight: 12,
    points: 10,
    enabled: 1,
    createdAt: '2018-08-28T18:26:28.000Z',
    updatedAt: '2018-08-28T18:26:28.000Z',
    stepProgressionLevel: 1,
    createdBy: 1,
    modifiedBy: 1
  }
]

export const steps = [
  {
    name: 'Resume Assesment',
    progressionLevel: 1,
    required: 1,
    type: 'Document'
  },
  {
    name: 'Phone Screening',
    progressionLevel: 2,
    required: 1,
    type: 'Non-Document'
  },
  {
    name: 'First Inperson Interview',
    progressionLevel: 3,
    required: 1,
    type: 'Non-Document'
  },
  {
    name: 'Second Inperson Interview',
    progressionLevel: 4,
    required: 1,
    type: 'Non-Document'
  },
  {
    name: 'Test',
    progressionLevel: 5,
    required: 1,
    type: 'Non-Document'
  }
]
