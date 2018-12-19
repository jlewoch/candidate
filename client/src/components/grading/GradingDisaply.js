import React, { Component } from 'react'
import QuestionCard from './questionTemplate/card/QuestionCard'

export default class GradingDisaply extends Component {
  componentDidMount () {
    this.props.getApplicationQuestions()
  }

  render () {
    return (
      <div>
        <form onSubmit={this.props.submit}>
          {this.props.applicationQuestions.map(item => QuestionCard(item))}
        </form>
      </div>
    )
  }
}
