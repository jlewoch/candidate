import React, { Component } from 'react'

export default class SummarySubMenu extends Component {
  render () {
    return (
      <div>
        <div>
          <h2>heading AppId or JobTitle</h2>
        </div>
        <div>steps</div>
        <div>overall rank</div>
        <div>
          <h4>evaluations</h4>
          <div>
            {this.props.steps.map(step => {
              return (
                <div className='summary-card'>
                  <p>{step.name}</p>
                  <p>points: 127/350</p> <p>steprank: {8.7}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
