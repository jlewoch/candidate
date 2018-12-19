import React, { Component } from 'react'
import { TabView, TabPanel } from 'primereact/tabview'
import { Chart } from 'primereact/chart'
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
      <div className='p-grid p-fluid'>
        <div className='p-col-12'>top overview</div>
        <div className='p-col-12 p-xl-8 p-lg-7 p-md-6'>
          <Chart type='pie' data={data} />
        </div>
        <TabView className='p-col-12 p-xl-4 p-lg-5 p-md-6'>
          <TabPanel header='Tasks'>Content I</TabPanel>
          <TabPanel header='Appointments'>Content II</TabPanel>
          <TabPanel header='Recent Activities'>Content III</TabPanel>
        </TabView>
      </div>
    )
  }
}

export default DashboardDisplay
