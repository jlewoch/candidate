import React from "react";
import QuestionTemplate from "../questionTemplate/QuestionTemplate";

const DocumentGrading = ({questions, onChange, updateGrade}) => {
  return (
    <div className='document-questions-container'>
      <div className="document">
      <iframe className='resume' title='resume' src={require('./sample.pdf') + "#view=FitV,100&view=FitH,100&toolbar=0"}></iframe>
      </div>
      <div className="document-questions">
        {questions.map((question, index) => {
          return <QuestionTemplate  key={index} onChange={onChange} updateGrade={updateGrade} value={questions[index]} index={index} question={question}  />;
        })}
      </div>
    </div>
  );
};

export default DocumentGrading;
