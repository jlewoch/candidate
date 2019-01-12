import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Admin from '../components/admin/Admin'
import { Dashboard } from '../components/dashboard'
import CalendarDispaly from '../components/calendar/Calendar'
import { JobPostings } from '../components/job_postings'
import { StepsForm } from '../components/admin/forms/steps'
import { Evaluations } from '../components/evaluations'
import Menu from './Menu'
import QuestionsList from '../components/evaluations/questions_list/QuestionsList'

class Routes extends Component {
  componentDidMount = () => {
    if (!localStorage.getItem('authToken')) {
      fetch('http://localhost:8000/db')
        .then(res => res.json())
        .then(data => localStorage.setItem('authToken', data))
        .catch(error => console.log(error))
    }
  }
  render () {
    return (
      <div id='main'>
        <Menu history={this.props.history} />
        <Switch>
          <Route path='/' exact component={QuestionsList} />
          <Route path='/admin' component={Admin} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/calendar' exact component={CalendarDispaly} />
          <Route path='/jobPostings' exact component={JobPostings} />
          <Route path='/evaluation' component={Evaluations} />
        </Switch>
      </div>
    )
  }
}
export default withRouter(Routes)
