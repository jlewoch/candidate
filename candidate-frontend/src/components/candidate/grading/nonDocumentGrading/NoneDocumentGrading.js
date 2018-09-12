import React from 'react';
import QuestionTemplate from '../questionTemplate/QuestionTemplate';

const NoneDocumentGrading = ({questions, onChange, updateGrade}) => {
    return (
        <div className='main-holder'>
        {questions.map((question, index)=> <QuestionTemplate updateGrade={updateGrade} onChange={onChange} key={index} value={questions[index]}  index={index} question={question} />)}
        </div>
    );
};

export default NoneDocumentGrading;