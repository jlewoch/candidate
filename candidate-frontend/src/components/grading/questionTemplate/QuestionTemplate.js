import React from "react";
import "./QuestionTemplate.css";
import Buttons from "./Buttons";
import TextArea from "./testarea/TextArea";
const QuestionTemplate = ({ question, index, onChange, value, updateGrade}) => {
  return (
    <div key={index} className="question">
      <div className="question-top">
        <p className="question__text">{`${index + 1}) ${question.question}`}</p>
      </div>
      <Buttons question={question.question} value={value} updateGrade={updateGrade} index={index} />
     <TextArea onChange={onChange} question={question} index={index} />
    </div>
  );
};

export default QuestionTemplate;
