import React, { Component } from 'react'
import { FullCalendar } from 'primereact/fullcalendar'
import { Calendar } from 'fullcalendar'

class CalendarDispaly extends Component {
  constructor (props) {
    super(props)
  }

  getdate = () => {
    console.log(this.Calendar.getDate(Date))
  }
  componentDidMount () {
    this.Calendar = new Calendar(this.cal, {
      weekends: false,
      header: {
        right: 'month,agendaWeek,agendaDay ',
        center: 'title',
        left: 'prevYear,prev,today,next,nextYear'
      },
      buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day',
        list: 'List'
      },
      dateClick: e => console.log(e),
      views: {
        month: {
          // name of view
          titleFormat: { year: 'numeric', month: 'long' }
        }
      }
    })
    this.Calendar.render()
  }

  render () {
    return <div ref={el => (this.cal = el)} />
  }
}
export default CalendarDispaly
