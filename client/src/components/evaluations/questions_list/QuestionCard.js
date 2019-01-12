import React from 'react'
import { SelectButton } from 'primereact/selectbutton'
import { InputTextarea } from 'primereact/inputtextarea'
const QuestionCard = ({ question, changeHandler, value, idx }) => {
  const options = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
    { label: '9', value: 9 },
    { label: '10', value: 10 }
  ]
  return (
    <div>
      <div>{question.question}</div>
      <div>
        <SelectButton
          optionLabel='label'
          name={idx}
          id='points'
          multiple={false}
          onChange={changeHandler}
          value={value}
          options={options}
        />
      </div>
      <div>
        <div>
          <InputTextarea
            name={idx}
            id='notes'
            value={question.notes}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
