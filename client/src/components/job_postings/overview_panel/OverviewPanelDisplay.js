import React, { Component } from 'react'
import ShowInfo from './applicant_info/ShowInfo'
import SubMenu from './sub_menu/SubMenu'

export default class OverviewPanelDisplay extends Component {
  render () {
    return (
      <div className='overview-card'>
        <ShowInfo {...this.props.selectedApplicant} />
        <SubMenu {...this.props} />
      </div>
    )
  }
}
