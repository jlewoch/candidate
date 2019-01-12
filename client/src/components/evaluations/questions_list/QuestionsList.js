import React, { Component } from 'react'
import QuestionCard from './QuestionCard'

export default class QuestionsList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  changeHandler = e => {
    let questions = this.state.questions
    questions[e.target.name][e.target.id] = e.target.value.hasOwnProperty(
      'value'
    )
      ? e.target.value.value
      : e.target.value
    this.setState(questions)
  }
  componentDidMount () {}

  render () {
    return (
      <div>
        {this.state.questions.map((question, index) => {
          return (
            <QuestionCard
              key={index}
              idx={index}
              changeHandler={this.changeHandler}
              question={question}
            />
          )
        })}
      </div>
    )
  }
}
