import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import { Admin } from '../components/admin'
import { Applicants } from '../components/applicants'
import { Dashboard } from '../components/dashboard'
import CalendarDispaly from '../components/calendar/Calendar'

class Routes extends Component {
  render () {
    const items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-file',
        command: () => this.props.history.push('/dashboard')
      },
      {
        label: 'Job Postings',
        icon: 'pi pi-briefcase',
        command: () => this.props.history.push('/jobPostings')
      },
      {
        label: 'Calendar',
        icon: 'pi pi-fw pi-calendar',
        command: () => this.props.history.push('/calendar')
      },
      {
        label: 'Admin',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Users',
            icon: 'pi pi-users',
            command: () => this.props.history.push('/admin/users')
          },
          {
            label: 'Questions',
            icon: 'pi pi-question-circle',
            command: () => this.props.history.push('/admin/questions')
          },
          {
            label: 'Steps',
            icon: 'pi pi-question-circle',
            command: () => this.props.history.push('/admin/steps')
          }
        ]
      }
    ]

    return (
      <div>
        <Menubar model={items}>
          <Button
            label={localStorage.getItem('session') ? 'Logout' : 'Login'}
            icon={`pi ${
              localStorage.getItem('session') ? 'pi-sign-out' : 'pi-sign-in'
            }`}
            style={{ marginLeft: 4 }}
          />
        </Menubar>
        <Switch>
          <Route path='/admin' component={Admin} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/calendar' exact render={() => <CalendarDispaly />} />
        </Switch>
      </div>
    )
  }
}
export default withRouter(Routes)
