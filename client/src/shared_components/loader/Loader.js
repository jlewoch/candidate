import React, { Component } from 'react'

const Loader = propName => WrappedComonent => {
  return class extends Component {
    isEmpty (prop) {
      return (
        prop === null ||
        prop === undefined ||
        (prop.hasOwnProperty('length') && prop.length === 0) ||
        (prop.constructor === Object && Object.keys(prop).length === 0)
      )
    }

    render () {
      return this.isEmpty(this.props[propName]) ? (
        <h1>Loading</h1>
      ) : (
        <WrappedComonent {...this.props} />
      )
    }
  }
}

export default Loader
