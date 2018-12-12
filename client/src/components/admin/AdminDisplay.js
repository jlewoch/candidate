import React, { Component } from 'react'

import { UserAdmin } from './users'

export default class AdminDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {}

  render () {
    return (
      <div>
        <UserAdmin />
      </div>
    )
  }
}
