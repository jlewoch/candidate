import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import DashOpenJobs from "./dashboardOpenJobs/DashOpenJobs";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: []
    };
  }

  getPositions = () => {
    fetch("https://candidate-application.herokuapp.com/db/positions/list",{
      signal:this.AbortController.signal,
      method:'GET',
      headers:{
        authToken: localStorage.getItem('session')
      }
    })
      .then(result => result.json())
      .then(data => {
        this.setState({ positions: data });
      })
      .catch(err => {
        console.error(err);
      });
  };
  componentWillUnmount() {
    this.AbortController.abort()
  }
  
  componentDidMount() {
    this.AbortController = new window.AbortController()
    localStorage.setItem('lastVisited', this.props.location.pathname)
    this.getPositions();
  
  }
  render() { 
    const { positions } = this.state;
    // const {userinfo} = this.props
    return (
      <div className='dashboard'>
      <section className='dashboard-section'>
      <DashOpenJobs positions={positions} />
      </section>

      </div>

    );
  }
}

export default withRouter(Dashboard);
// <DashOpenJobs />
