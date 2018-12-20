import React, { Component } from 'react'
import { Calendar } from 'fullcalendar'
import { ContextMenu } from 'primereact/contextmenu'
const items = [
  {
    label: 'Options',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        command: () => {
          window.location.hash = '/fileupload'
        }
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash',
        url: 'http://primetek.com.tr'
      }
    ]
  },
  {
    label: 'Account',
    items: [
      {
        label: 'Options',
        icon: 'pi pi-fw pi-cog',
        command: () => {
          window.location.hash = '/'
        }
      },
      { label: 'Sign Out', icon: 'pi pi-fw pi-power-off' }
    ]
  }
]

class CalendarDispaly extends Component {
  constructor (props) {
    super(props)
    this.state = {
      height: window.innerHeight - 75,
      options: {
        /* visual options */
        header: {
          right: 'month,agendaWeek,agendaDay ',
          center: 'title',
          left: 'prevYear,prev,today,next,nextYear'
        },
        buttonText: {
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day'
        },
        theme: false,
        themeButtonIcons: {
          prev: 'circle-triangle-w',
          next: 'circle-triangle-e',
          prevYear: 'circle-triangle-w',
          nextYear: 'circle-triangle-e'
        },

        views: {
          month: {
            columnHeaderFormat: {
              weekday: 'long'
            },
            navLinks: true,
            eventLimit: 5,
            titleFormat: { year: 'numeric', month: 'long' }
          },
          day: {
            columnHeaderFormat: {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              weekday: 'long',
              omitCommas: true
            },
            titleFormat: {}
          },
          week: {
            columnHeaderFormat: {
              weekday: 'long'
            },
            titleFormat: {
              month: 'long',
              day: 'numeric',
              omitCommas: true
            }
          }
        },
        nowIndicator: true,
        displayEventTime: false,
        windowResize: view => {
          // this.setState({ height:  })
        },
        height: window.innerHeight - 75,

        /* interactions */
        selectable: true,
        select: e => {
          this.dateOutOfRangeSelectHandler(e)
        }
      },
      events: [
        {
          id: 1,
          title: 'All Day Event',
          editable: true,
          start: '2018-12-01'
        },
        {
          id: 2,
          title: 'Long Event',
          start: '2018-12-07',
          editable: true,
          end: '2018-12-10'
        },
        {
          id: 3,
          title: 'Repeating Event',
          editable: true,
          start: '2018-12-09T16:00:00'
        },
        {
          id: 4,
          title: 'Repeating Event',
          editable: true,
          start: '2018-12-16T16:00:00'
        },
        {
          id: 5,
          title: 'Conference',
          editable: true,
          start: '2018-12-11',
          end: '2018-12-13'
        },
        {
          id: 6,
          title: 'Meeting',
          start: '2018-12-12T10:30:00',
          editable: true,
          end: '2018-12-12T12:30:00'
        },
        {
          id: 7,
          title: 'Lunch',
          editable: true,
          start: '2018-12-12T12:00:00'
        },
        {
          id: 8,
          title: 'Meeting',
          editable: true,
          start: '2018-12-12T14:30:00'
        },
        {
          id: 9,
          title: 'Happy Hour',
          editable: true,
          start: '2018-12-12T17:30:00'
        },
        {
          id: 10,
          title: 'Dinner',
          editable: true,
          start: '2018-12-12T20:00:00'
        },
        {
          id: 11,
          title: 'Birthday Party',
          start: '2018-12-13T07:00:00',
          editable: true
        },
        {
          id: 12,
          title: 'Click for Google',
          start: '2018-12-28',
          editable: true
        }
      ]
    }
  }
  /* might add custom buttons
 customButtons: {
    myCustomButton: {
      text: 'custom!',
      click: function() {
        alert('clicked the custom button!');
      }
    }
  },
  then add name to header

*/
  /*
  personal preferences store in local storage
  scrooltime
  startingday
  weekends idden
  agenda timelength
  default view
  business hours

  */

  dateOutOfRangeSelectHandler = e => {
    const month = e => new Date(e).getMonth()
    const year = e => new Date(e).getFullYear()
    if (
      (month(e.view.title) < month(e.start) &&
        year(e.view.title) === year(e.start)) ||
      year(e.view.title) < year(e.start)
    ) {
      this.calendar.next()
    } else if (
      month(e.view.title) > month(e.start) ||
      year(e.view.title) > year(e.start)
    ) {
      this.calendar.prev()
    }
  }
  componentDidMount () {
    this.calendar = new Calendar(this.fc, {
      ...this.state.options,
      eventSources: [{ events: this.state.events }]
    })
    this.calendar.el.oncontextmenu = e => this.cm.show(e)
    this.calendar.render()
  }

  render () {
    return <div ref={el => (this.fc = el)} style={{ padding: '1em' }} />
  }
}
export default CalendarDispaly
/*
contex menu go to associated application if available
edit option on context menu

event click

*/
