import React, { Component } from 'react'
import { TabView, TabPanel } from 'primereact/tabview'
import { Chart } from 'primereact/chart'
import TaskCard from './tasks/TaskCard'

class DashboardDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.getJobs()
  }
  render () {
    const data = {
      labels: Object.keys(this.props.openJobs),
      datasets: [
        {
          data: Object.keys(this.props.openJobs).map(
            key => this.props.openJobs[key].length
          ),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#CCCCCC'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#CCCCCC']
        }
      ]
    }
    return (
      <div className='p-col'>
        <div className='p-grid p-fluid p-col'>
          <div className='p-col-12 p-lg-3 p-md-4 p-sm-6'>stat1</div>
          <div className='p-col-12 p-lg-3 p-md-4 p-sm-6'>stat2</div>
          <div className='p-col-12 p-lg-3 p-md-4 p-sm-6'>stat3</div>
          <div className='p-col-12 p-lg-3 p-md-4 p-sm-6'>stat4</div>
        </div>
        <div className='p-grid p-fluid'>
          <div className='p-col-12 p-xl-8 p-lg-7 p-md-6'>
            <Chart type='pie' data={data} />
          </div>
          <TabView className='p-col-12 p-xl-4 p-lg-5 p-md-6'>
            <TabPanel header='Tasks'>
              <TaskCard />
            </TabPanel>
            <TabPanel header='Appointments'>Content II</TabPanel>
            <TabPanel header='Recent Activities'>Content III</TabPanel>
          </TabView>
        </div>
      </div>
    )
  }
}

export default DashboardDisplay
