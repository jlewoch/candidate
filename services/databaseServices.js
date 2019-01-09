const knex = require("../db/knex/knex");
const objects = require("./objects");
const objectServices = require("./objectServices");






async function insertUpadateQuestionEvaluations(
  updatedInfo,
  stepId,
  applicationId,
  employee
) {
  let params = stepId
    ? { stepProgressionLevel: stepId, enabled: 1 }
    : { enabled: 1 };

  return await Promise.all([
    knex("Questions as q")
      .select(
        "q.id as questionId",
        "question",
        "applicationId",
        "weight",
        "points",
        "providedGrade",
        "notes",
        "stepProgressionLevel"
      )
      .where(params)
      .leftJoin("QuestionEvaluations as a", function() {
        this.on("q.id", "=", "a.questionId").andOnIn("a.applicationId", [
          applicationId
        ]);
      })
  ]).then(data => {
    data = data[0]
    if (data.find(obj => obj.providedGrade !== null)) {
      data.filter(item => item.providedGrade).map(item => {
        updatedInfo
          .filter(
            updated =>
              updated.questionId === item.questionId &&
              updated.providedGrade &&
              (updated.providedGrade !== item.providedGrade ||
                updated.notes !== item.notes)
          )
          .map(updateItem => {
            //creating update object
            const temp = {
              updatedAt: new Date(),
              modifiedBy: employee,
              notes: updateItem.notes.length > 0 ? updateItem.notes : "",
              providedGrade: updateItem.providedGrade
            };
            knex("QuestionEvaluations")
          .where({
            applicationId: item.applicationId,
            questionId: updateItem.questionId
          })
          .update(temp)
          .catch(err => console.log(err));
          });
      updateFilter(updatedInfo, data, employee, applicationId);
        
      });
    } else {
      if (updatedInfo.filter(item=>item.providedGrade)) {
        updatedInfo.map(item=>{
          item.applicationId = applicationId;
        insertQuestionEvaluations(item, employee);

        })
      }
    }
  });
}

// filters to insert after update of question evaluations
function updateFilter(info, matchData, employee, applicationId) {
  matchData.filter(item => !item.providedGrade).map(data => {
    info
      .filter(
        infoItem =>
          infoItem.questionId === data.questionId && infoItem.providedGrade
      )
      .map(insertItem => {
        if (insertItem) {
          insertItem.applicationId = applicationId;
          insertQuestionEvaluations(insertItem, employee);
        }
      });
  });
}
// creates object and inserts new question evaluation
function insertQuestionEvaluations(data, employee) {
  const temp = objects.createQuestionEvaluation(data, new Date(), employee);
  knex("QuestionEvaluations")
    .insert(temp)
    .catch(err => console.log(err));
}
// creates object and inserts new applicant
function insertApplicant(applicant) {
  const temp = objects.createApplicant(applicant, new Date());
  knex("Applicants")
    .insert(temp)
    .catch(err => console.log(err));
}
// creates object and inserts new application
function insertApplication(applicantId, positionId) {
  const obj = {
    applicantId,
    positionId
  };
  //pulls all current existing questions and evaluations for a specific application
  allQuestionInfo(null, applicationId).then(data => {
    obj.total = objectServices.totalAvailablePoints(data);
  });
  const temp = objects.createApplication(obj, new Date());
  knex("Applications")
    .insert(temp)
    .catch(err => console.log(err));
}

async function updateStepEvaluation(applicationId, stepId, employee, skipped) {
  let params = stepId
    ? { stepProgressionLevel: stepId, enabled: 1 }
    : { enabled: 1 };
  const temp = {};
  return await Promise.all([
    knex("Steps")
      .select("weight")
      .where({ progressionLevel: stepId }),
    knex("StepEvaluations")
      .select("*")
      .where({ stepId: stepId, applicationId: applicationId }),

    knex("Questions as q")
      .select(
        "q.id as questionId",
        "question",
        "applicationId",
        "weight",
        "points",
        "providedGrade",
        "notes",
        "stepProgressionLevel"
      )
      .where(params)
      .leftJoin("QuestionEvaluations as a", function() {
        this.on("q.id", "=", "a.questionId").andOnIn("a.applicationId", [
          applicationId
        ]);
      })
  ]).then(data => {
    const exists = data[1];
    const allQuestion = data[2];
    const stepweight = data[0];

    (temp.modifiedBy = employee),
      (temp.updatedAt = new Date().toLocaleString()),
      (temp.skipped = skipped ? skipped : 0),
      (temp.totalProvidedPoints = objectServices.totalProvidedPoints(
        allQuestion
      )),
      (temp.totalGrade = objectServices.getPercent(allQuestion)),
      (temp.status =
        allQuestion.filter(item => item.providedGrade).length ===
        allQuestion.length
          ? "Complete"
          : "In Progress");

    if (exists.length !== 0) {
      return knex("StepEvaluations")
        .where({ applicationId: applicationId, stepId: stepId })
        .update(temp)
        .catch(err => console.log(err));
    } else {
      temp.weight = stepweight[0].weight;
      temp.stepId = stepId;
      temp.applicationId = applicationId;
      temp.createdAt = new Date().toLocaleString();
      temp.totalAvailablePoints = objectServices.totalAvailablePoints(
        allQuestion
      );
      return knex("StepEvaluations")
        .insert(temp)
        .catch(err => console.log(err));
    }
  });
}

function allQuestionInfo(step, applicationId) {
  let params = step
    ? { stepProgressionLevel: step, enabled: 1 }
    : { enabled: 1 };
  return knex("Questions as q")
    .select(
      "q.id as questionId",
      "question",
      "applicationId",
      "weight",
      "points",
      "providedGrade",
      "notes",
      "stepProgressionLevel"
    )
    .where(params)
    .leftJoin("QuestionEvaluations as a", function() {
      this.on("q.id", "=", "a.questionId").andOnIn("a.applicationId", [
        applicationId
      ]);
    });
}

function insertQuestion(questionInfo, employee) {
  const temp = objects.createQuestion(questionInfo, new Date(), employee);
  knex("Questions")
    .insert(temp)
    .catch(err => console.log(err));
}
function updateQuestion(updateInfo, employee) {
  const temp = {
    ...updatedInfo,
    modifiedBy: employee,
    updatedAt: new Date()
  };
  knex("Questions")
    .where({ id: updateInfo.id })
    .update(temp)
    .catch(err => console.log(err));
}
function insertStep(stepInfo, employee) {
  const temp = objects.createStep(stepInfo, new Date(), employee);
  knex("Steps")
    .insert(temp)
    .catch(err => console.log(err));
}
function updateStep(updateInfo, employee) {
  const temp = {
    ...updatedInfo,
    modifiedBy: employee,
    updatedAt: new Date()
  };
  knex("Steps")
    .where({ progressionLevel: updateInfo.progressionLevel })
    .update(temp)
    .catch(err => console.log(err));
}
async function updateApplication(applicationId, employee) {
  const obj = {
    modifiedBy: employee,
    updatedAt: new Date().toLocaleString()
  };
  return await Promise.all([
    allStepEvaluationInfo(applicationId),
    knex("Steps").where({ required: 1 })
  ]).then(data => {
    const step = data[0];
    const steps = data[1];
    let allEval = step
      .filter(
        stepeval => stepeval.status === "Complete" || stepeval.skipped === 1
      )
      .map(item => item);

    obj.totalProvidedPoints = step
      .filter(item => item.skipped === 0)
      .reduce((prev, next) => prev + next.totalProvidedPoints, 0);
    obj.totalAvailablePoints = step
      .filter(item => item.skipped === 0)
      .reduce((prev, next) => prev + next.totalAvailablePoints, 0);

    step
      .filter(
        filteredItem => filteredItem.totalGrade > 0 && filteredItem.weight
      )
      .map(item => {
        obj.totalGrade = (
          (item.totalGrade / 100) *
          (item.weight / 100) *
          100
        ).toFixed(1);
      });

    obj.status = allEval.length !== steps.length ? "In Progress" : "Complete";
    obj.currentStep =
      allEval.length === steps.length ? allEval.length : allEval.length + 1;

    return knex("Applications")
      .where({ id: applicationId })
      .update(obj);
  });
}
async function getAllApplicationInfo(positionId) {
  return await Promise.all([
    knex("Applications as a")
      .select("*")
      .leftJoin("Employees", function() {
        this.on("a.modifiedBy", "=", "Employees.id");
      })
      .join("StepEvaluations", function() {
        this.on("a.id", "=", "StepEvaluations.applicationId");
      })
      .where({ positionId: positionId }),
    knex("Steps").select("*")
  ]).then(data => {
    const main = data[0];
    const steps = data[1];
    let arr = [];
    let obj = {};

    for (let i = 0; i < main.length; i++) {
      for (let x = 0; x < arr.length; x++) {
        if (arr[x].applicationId === main[i].applicationId) {
          break;
        } else if (x === arr.length - 1) {
          let skipped = main
            .filter(
              item =>
                item.skipped === 1 &&
                item.applicationId === main[i].applicationId
            )
            .map(item =>
              steps
                .filter(step => step.progressionLevel === item.stepId)
                .map(names => names.name)
            );
          let otherInfo = main
            .filter(item => item.applicationId === main[i].applicationId)
            .map(item => item);

          obj.applicationId = otherInfo[0].applicationId;
          obj.totalprovided;
          obj.totalGrade = otherInfo[0].totalGrade;
          obj.totalProvidedPoints = otherInfo[0].totalProvidedPoints;
          obj.totalAvailablePoints = otherInfo[0].totalAvailablePoints;
          obj.employee = `${otherInfo[0].fName} ${otherInfo[0].lName}`;
          obj.skipped = skipped.join(",").split(",");

          arr.push(obj);
          obj = {};
        }
      }
      if (arr.length === 0) {
        let skipped = main
          .filter(
            item =>
              item.skipped === 1 && item.applicationId === main[i].applicationId
          )
          .map(item =>
            steps
              .filter(step => step.progressionLevel === item.stepId)
              .map(names => names.name)
          );
        let otherInfo = main
          .filter(item => item.applicationId === main[i].applicationId)
          .map(item => item);

        obj.applicationId = otherInfo[0].applicationId;
        obj.totalprovided;
        obj.totalGrade = otherInfo[0].totalGrade;
        obj.totalProvidedPoints = otherInfo[0].totalProvidedPoints;
        obj.totalAvailablePoints = otherInfo[0].totalAvailablePoints;
        obj.employee = `${otherInfo[0].fName} ${otherInfo[0].lName}`;
        obj.skipped = skipped.join(",").split(",");
        arr.push(obj);

        obj = {};
      }
    }

    return arr;
  });
}

function allStepEvaluationInfo(applicationId) {
  return knex("StepEvaluations")
    .select("*")
    .where({ applicationId: applicationId });
}
module.exports = {
  insertUpadateQuestionEvaluations,
  insertApplicant,
  insertApplication,
  updateStepEvaluation,
  allQuestionInfo,
  insertQuestion,
  updateQuestion,
  updateStep,
  insertStep,
  updateApplication,
  getAllApplicationInfo
};
