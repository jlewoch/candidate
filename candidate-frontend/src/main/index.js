import React, { Component } from "react";
import "./App.css";

import { Route, Switch, withRouter } from "react-router-dom";
// import Dashboard from "../components/dashboard/Dashboard";
// import NavBar from "../components/navBar/NavBar";
// import Positions from "../components/positions/Positions";
// import Admin from "../components/admin/Admin";
// import Login from "../components/login/Login";
// import PositionsList from "../components/positions/positionsList/PositionsList";
// import Grading from "../components/candidate/grading/Grading";
// import Results from "../components/candidate/results/Results";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     failed: false,
  //     userinfo: null,
  //     usernameInput: "",
  //     passwordInput: "",
  //     steps: []
  //   };
  // }
  // onChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  // resumeSession = () =>{
  //   if (localStorage.getItem("session")) {
      

  //   fetch("https://candidate-application.herokuapp.com/db/session", {
  //     method: "GET", 
  //     headers: {
  //       authToken: localStorage.getItem("session"),
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(resp => resp.json())
  //     .then(data => {
  //       this.setState({ userinfo: data });
  //       this.getSteps();
  //       if (localStorage.getItem('lastVisited')) {
  //        const last = localStorage.getItem('lastVisited')
  //         this.props.history.push(last)
  //       } else {
  //         this.props.history.push('/dashboard')
  //       }
     
  //     }).catch(err=>this.props.history.push('/login'))
  //   }
  // }
  // login = async e => {
  //   e.preventDefault();
  //   const user = {
  //     username: e.target.usernameInput.value,
  //     password: e.target.passwordInput.value
  //   };
  //   await fetch("https://candidate-application.herokuapp.com/db/login", {
  //     method: "POST",
  //     body: JSON.stringify(user),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(resp => resp.json())
  //     .then(data => {
  //       localStorage.setItem("session", data.session);
  //       this.setState({ userinfo: data.userInfo });
  //       this.getSteps();
  //       this.props.history.push("/dashboard");
  //     })
  //     .catch(err => this.setState({ failed: true }));
  // };

  // getSteps = () => {
  //   fetch(`https://candidate-application.herokuapp.com/db/steps`, {
  //     method: "GET",
  //     headers: {
  //       authToken: localStorage.getItem("session")
  //     }
  //   })
  //     .then(resp => resp.json())
  //     .then(data => this.setState({ steps: data }))
  //     .catch(err => console.log(err));
  // };

  // componentDidMount() {
  //   this.props.history.push('/login')
  //   this.resumeSession()
  // } 

  render() {
    // const {
    //   userinfo,
    //   usernameInput,
    //   passwordInput,
    //   failed,
    //   steps
    // } = this.state;
    // if (!userinfo) {
    //   return (
    //     <Login
    //       failed={failed}
    //       passwordInput={passwordInput}
    //       usernameInput={usernameInput}
    //       onChange={this.onChange}
    //       login={this.login}
    //     />
    //   );
    // }
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default withRouter(App);
// {userinfo ? <NavBar userinfo={userinfo} /> : null}

// <Switch>
//   <Route
//     path="/dashboard"
//     exact
//     render={props => <Dashboard userinfo={userinfo} />}
//   />

//   <Route
//     path="/positions"
//     exact
//     render={props => <PositionsList userinfo={userinfo} />}
//   />
//   <Route
//     path="/positions/:positionId/applicants"
//     exact
//     render={props => (
//       <Positions
//         selectedPosition={props.match.params.positionId}
//         userinfo={userinfo}
//       />
//     )}
//   />
//   <Route path='/positions/:positionId/finalists' exact render={props=>  <Results positionId={props.match.params.positionId}/>}/>
 
//   <Route
//     path="/positions/:positionId/applicants/:applicationId/evaluation/:currentStep"
//     exact
//     render={props => (
//       <Grading
//         steps={steps}
//         applicationId={props.match.params.applicationId}
//         positionId={props.match.params.positionId}
//         currentStep={props.match.params.currentStep}
//       />
//     )}
//   />

//   <Route
//     path="/positions/:positionsId/applicants/:applicantId/results"
//     exact
//     render={props => <Results props={props} />}
//   />

//   <Route
//     path="/admin/:subSelection"
//     exact
//     render={props => (
//       <Admin
//         steps={steps}
//         currentLocation={props.match.params.subSelection}
//         userinfo={userinfo}
//       />
//     )}
//   />
//   <Route
//     path="/login"
//     exact
//     render={props => (
//       <Login
//         failed={failed}
//         passwordInput={passwordInput}
//         usernameInput={usernameInput}
//         onChange={this.onChange}
//         login={this.login}
//       />
//     )}
//   />
// </Switch>