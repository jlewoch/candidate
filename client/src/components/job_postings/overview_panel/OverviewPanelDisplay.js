import React, { Component } from 'react'
import SubMenuSelector from './sub_menu/SubMenuSelector'
import SubMenu from './sub_menu/SubMenu'

export default class OverviewPanelDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedSub: 'Summary',
      otherInfoAvailable: false
    }
  }
  showName = () => {
    let apps = Object.values(this.props.applications).filter(
      application =>
        application.applicant === this.props.selectedApplicant._ &&
        application.status !== 0
    )
    for (let i = 0; i < apps.length; i++) {
      const app = apps[i]
      if (app.status === 0) {
        return
      } else if (app.status > 0 && i === apps.length - 1) {
        this.setState({ otherInfoAvailable: true })
      }
    }
    apps.unshift(this.props.selectedApplication)

    this.setState({ applications: apps })
  }
  subMenuChange = e => {
    this.setState({ selectedSub: e })
  }
  componentDidMount = () => {
    this.showName()
  }

  render () {
    const { selectedSub, selectedApplicant } = this.state

    return (
      <div className='overview-card'>
        <div className='overview-card-top'>
          <div className='overview-card-top-left'>
            <img
              src={require('./1.jpg')}
              alt=''
              className='overview-card-photo'
            />
          </div>
          <div className='overview-card-top-right'>
            <h3 className='title'>{`: ${selectedApplicant.name}`}</h3>
            <p className='title'>{`Phone: ${selectedApplicant.phone}`}</p>
            <p className='title'>{`Email: ${selectedApplicant.email}`}</p>
            <p className='title'>{`LinkedIn: ${selectedApplicant.email}`}</p>
            <p className='title'>{`Github: ${selectedApplicant.email}`}</p>
          </div>
        </div>
        <SubMenuSelector
          selectedSub={selectedSub}
          options={['Summary', 'Applications', 'Communications']}
          clickHandler={this.subMenuChange}
        />
        <SubMenu selectedSub={selectedSub} />
      </div>
    )
  }
}
