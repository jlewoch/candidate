import React, { Component } from 'react'

export default class SummarySubMenu extends Component {
  render () {
    console.log(this.props.selectedApplication)

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
                step.name !== 'New' && (
                  <div className='summary-card'>
                    <p>{step.name}:</p>
                    <p>
                      {this.props.selectedApplication[step.level]
                        ? 'rank: ' +
                          this.props.selectedApplication[step.name + '_rank']
                        : 'Pending'}
                    </p>
                  </div>
                )
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
