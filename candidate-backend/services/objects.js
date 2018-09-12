const bcrypt = require('bcrypt');
function createAccount(userObj, date, creator){
   return {
    username: userObj.username,
    password: bcrypt.hashSync(userObj.password, 7),
    loggedIn: false,
    lastLoggedOn: null,
    failedAttempts: 0,
    locked: false,
    employeeId:userObj.employeeId,
    passwordModifiedDate: date.toLocaleString(),
    active: true,
    createdAt: date.toLocaleString(),
    updatedAt: date.toLocaleString(),
    createdBy: creator,
    modifiedBy: creator,
    accessLevel: userObj.accessLevel
      }
}


function createApplicant(userObj,date){
    return {
        fName: userObj.fName,
        lName: userObj.lName,
        email: userObj.email,
        createdAt: date.toLocaleString(),
        updatedAt: date.toLocaleString(),
       }
 }
 function createApplication(obj,date){
    return {
        totalGrade: 0,
        totalProvidedPoints: 0,
        totalAvailablePoints:obj.total,
        positionId: obj.positionId,
        applicantId: obj.applicantId,
        status: 'New',
        currentStep: 1,
        createdAt: date.toLocaleString(),
        updatedAt: date.toLocaleString(),
        modifiedBy: null
       }
 }

 function createDocument(obj){
    return {
        name: obj.name,
        type: obj.type,
        createdAt: date.toLocaleString(),
       }
 }
 function createEmployee(userObj, date, creator){
     
    return {
        fName: userObj.fName,
        lName: userObj.lName,
        phone: userObj.phone,
        email: userObj.email,
        manager: userObj.manager,
        createdAt: date.toLocaleString(),
        updatedAt: date.toLocaleString(),
        createdBy: creator,
        modifiedBy: creator
       }
 }

 function createPosition(obj,date,creator){
    return {
        title: obj.title,
        closingDate: obj.closingDate,
        openingDate: obj.openingDate,
        priority: obj.priority,
        resolved: false,
        createdAt: date.toLocaleString(),
        updatedAt: date.toLocaleString(),
        createdBy: creator,
        modifiedBy: creator
       }
 }


 function createQuestion(obj,date,creator){
    return {
        question: obj.question,
        weight: obj.weight,
        points: 10,
        enabled: obj.enabled,
        stepProgressionLevel: obj.stepProgressionLevel,
        createdAt: date.toLocaleString(),
        updatedAt: date.toLocaleString(),
        createdBy: creator,
        modifiedBy: creator
       }
 }
 function createQuestionEvaluation(obj,date, creator){
    return {
        notes: obj.notes ? obj.notes : '',
        providedGrade: obj.providedGrade,
        questionId: obj.questionId,
        applicationId: obj.applicationId,
        createdBy:creator,
        modifiedBy:creator,
        createdAt: date.toLocaleString(),
        updatedAt: date.toLocaleString()
       }
 }
 function createStep(obj, date, creator){
    return {
        name: obj.name,
        progressionLevel: obj.progressionLevel,
        required: obj.required,
        weight: obj.weight,
        type: obj.type,
        enabled: obj.enabled,
       createdBy:creator,
        modifiedBy:creator,
        createdAt: date.toLocaleString(),
        updatedAt: date.toLocaleString()
       }
 }
 function createStepEvaluation(applicationId,date,creator, stepId, skipped){
    return {
        skipped: skipped ? skipped : false,
        totalProvidedPoints: 0,
        totalAvailablePoints:0,
        totalGrade:0,
        status: 'Not Started',
        skipped:0,
        stepId: stepId,
        applicationId:applicationId,
        modifiedBy:creator,
        createdAt: date.toLocaleString(),
        updatedAt: date.toLocaleString()
       }
 }
 function createUpdateObject(updateFields){
    let obj = {}
    for(let i = 0 ; i < updateFields.length ; i++){ return {...obj, [updateFields[i]]: updateFields[hello[i]]}}
    return obj
}
 module.exports = {
     createUpdateObject,
     createStep,
     createStepEvaluation,
     createQuestion,
     createQuestionEvaluation,
     createAccount,
     createApplicant,
     createApplication,
     createDocument,
     createPosition,
     createEmployee
 }
