export const data = [
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
    }
]

export const expectedRemove = [
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
    }
]
export const expectedUpdate = [
    {
        "id": 1,
        "totalGrade": 133,
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
    }
]
export const expectedAdd = [
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