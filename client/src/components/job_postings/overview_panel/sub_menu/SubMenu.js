import React, { Component } from 'react'
import ApplicationsSubMenu from './ApplicationsSubMenu'
import CommunicationsSubMenu from './CommunicationsSubMenu'
import SummarySubMenu from './SummarySubMenu'
import TabSelector from '../../../../shared_components/tab_selector_panel/TabSelector'

export default class SubMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 'Summary'
    }
  }
  clickHandler = e => {
    this.setState({ selected: e })
  }
  subMenu = () => {
    switch (this.state.selected) {
      case 'Other Applications':
        return (
          <ApplicationsSubMenu
            applicant={this.props.selectedApplicant}
            applications={this.props.applications}
          />
        )
      case 'Communication':
        return <CommunicationsSubMenu />
      case 'Summary':
        return (
          <SummarySubMenu
            selectedApplication={this.props.selectedApplication}
            steps={this.props.steps}
          />
        )
      default:
        return <h1>Invalid Selection</h1>
    }
  }
  render () {
    return (
      <div>
        <TabSelector
          list={['Other Applications', 'Summary', 'Communication']}
          selected={this.state.selected}
          clickHandler={this.clickHandler}
        />
        {this.subMenu()}
      </div>
    )
  }
}
