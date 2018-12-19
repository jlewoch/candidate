import React from 'react'
import { InputTextarea } from 'primereact/inputtextarea'
const QuestionCard = ({ id, question, notes }) => {
  return (
    <div className='question-card' id={id}>
      <div>
        <p>{question}</p>
      </div>
      <div>
        <InputTextarea rows={1} autoResize defaultValue={notes} />
      </div>
    </div>
  )
}

export default QuestionCard
