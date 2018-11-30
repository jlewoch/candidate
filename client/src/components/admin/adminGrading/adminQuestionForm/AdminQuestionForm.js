import React from "react";

const AdminQuestionForm = ({
  submitQuestion,
  steps,
  questions,
  deleteQuestion
}) => {

  return (
    <div className="main-right-bottom">
      <h3 className="title">Create a Question</h3>
      <form className="admin-form" onSubmit={submitQuestion}>
        <div className="admin-form-question">
          <label className="label" htmlFor="fName">
            Question
          </label>

          <div className="admin-input-container">
            <input
              className="questionInput"
              type="text"
              name="question"
              id="question"
            />
          </div>
        </div>
        <div className="admin-form-question remove-align">
          <label className="label" htmlFor="settings">
            Settings
          </label>
          <div className="admin-input-container">
            <select
              className="questionInput"
              defaultValue="Yes"
              name="enabled"
              id="enabled"
            >
              <option value={1}>Enabled</option>
              <option value={0}>Disable</option>
            </select>

            <select className="questionInput" name="stepProgressionLevel">
              {steps.map(item => {
                return (
                  <option value={item.progressionLevel}>{item.name}</option>
                );
              })}
            </select>
            <input
              placeholder="Question Weight"
              className="questionInput"
              type="number"
              name="weight"
              id="weight"
            />
          </div>
        </div>
        <div className="button-container">
          <input
            className="button margin"
            type="submit"
            value="Question Employee"
          />
          <button className="button">Cancel</button>
        </div>
     
      </form>
      <div  className='tablecontainer'>
      <table className='questiontable'>
        <thead>
          <tr>
            <th>Question</th>
            <th>Progression Step</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((item, index )=> {
                return (
                  <tr key={index}>
                    <td className='padding'>{item.question}</td>
                    <td className='center'>{steps.find(step=> step.progressionLevel === item.stepProgressionLevel).name}</td>
                    <td className='center'>
                      <button
                      id={item.id}
                        onClick={deleteQuestion}
                        className="remove"
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })
          }
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default AdminQuestionForm;
