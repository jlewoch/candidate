import React, { Component } from 'react'

import { UserAdmin } from './users'
import { EvaluationsAdmin } from './evaluations'

export default class AdminDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {}

  render () {
    return (
      <div>
        <EvaluationsAdmin />
      </div>
    )
  }
}
