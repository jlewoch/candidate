import React, { Component } from 'react'
import ApplicationsSubMenu from './ApplicationsSubMenu'
import CommunicationsSubMenu from './CommunicationsSubMenu'
import SummarySubMenu from './SummarySubMenu'
import SubMenuSelector from './SubMenuSelector'

export default class SubMenuDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedSub: 'Summary'
    }
  }
  clickHandler = e => {
    this.setState({ selectedSub: e })
  }
  subMenu = () => {
    switch (this.state.selectedSub) {
      case 'Other Applications':
        return <ApplicationsSubMenu {...this.props.selectedApplicant} />
      case 'Communication':
        return <CommunicationsSubMenu />
      case 'Summary':
        return <SummarySubMenu />
      default:
        return <h1>Invalid Menu Selection</h1>
    }
  }
  render () {
    return (
      <div>
        <SubMenuSelector
          options={['Other Applications', 'Summary', 'Communication']}
          selectedSub={this.state.selectedSub}
          clickHandler={this.clickHandler}
        />
        {this.subMenu()}
      </div>
    )
  }
}
