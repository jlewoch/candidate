import React, { Component } from "react";
import { Route, withRouter, Link } from "react-router-dom";
import AdminUsers from "./adminUsers/AdminUsers";
import AdminQuestionForm from "./adminGrading/adminQuestionForm/AdminQuestionForm";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }
  
  submitUser = e => {
    e.preventDefault();
    const { fName, lName, email, password, username, phone } = e.target;
    const data = {
      fName: fName.value,
      lName: lName.value,
      email: email.value,
      phone: parseInt(phone.value),
      manager: 1,
      accessLevel: 1,
      username: username.value,
      password: password.value
    };
    fetch(`https://candidate-application.herokuapp.com/db/accounts`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        authToken: localStorage.getItem("session"),
        "Content-Type": "application/json"
      }
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  getQuestions = () =>{
    fetch(`https://candidate-application.herokuapp.com/db/questions/admin`, {
      method: "GET",
      signal:this.AbortController.signal,
      headers: {
        authToken: localStorage.getItem("session"),
        "Content-Type": "application/json"
      }
    }).then(resp=> resp.json())
      .then(data => this.setState({questions: data})
      )
      .catch(err => console.log(err));
  }
  submitQuestion = (e) => {
    e.preventDefault()
    const data ={
      questionObj:{question: e.target.question.value,
        weight: e.target.weight.value,
        enabled: e.target.enabled.value,     
        stepProgressionLevel: e.target.stepProgressionLevel.value}
    }
    fetch(`https://candidate-application.herokuapp.com/Questions/admin`, {
      method: "post",
      body: JSON.stringify(data),
      signal:this.AbortController.signal,
      headers: {
        authToken: localStorage.getItem("session"),
        "Content-Type": "application/json"
      }
    })
      .then(data => this.setState({questions:data}))
      .catch(err => console.log(err));
  }
  deleteQuestion = (e) => {
    e.preventDefault()

    const data = {
      id:e.target.id
    }
    fetch(`https://candidate-application.herokuapp.com/db/questions/admin`, {
      method: "delete",
      body: JSON.stringify(data),
      signal:this.AbortController.signal,
      headers: {
        authToken: localStorage.getItem("session"),
        "Content-Type": "application/json"
      }
    })
      .then(data => {
        let allquestions = this.state.questions
     let index = allquestions.indexOf(allquestions.find(item=> item.id.toString() === e.target.id))
     allquestions.splice(index,1)
     this.setState({questions: allquestions});
      })
      .catch(err => console.log(err));
  }

  updateQuestion = (e) => {
    e.preventDefault()
    const data ={
      questionObj:{question: e.target.question.value,
        weight: e.target.weight.value,
        enabled: e.target.enabled.value,     
        stepProgressionLevel: e.target.stepProgressionLevel.value}
    }
    fetch(`https://candidate-application.herokuapp.com/db/questions/admin`, {
      method: "put",
      body: JSON.stringify(data),
      signal:this.AbortController.signal,
      headers: {
        authToken: localStorage.getItem("session"),
        "Content-Type": "application/json"
      }
    })
      .then(data => this.setState({questions:data}))
      .catch(err => console.log(err));
  }
  componentWillUnmount() {
    this.AbortController.abort();
  }


  componentDidMount() {
    this.AbortController = new window.AbortController();
    this.props.history.push("/admin/users");
    this.getQuestions()
    localStorage.setItem("lastVisited", this.props.location.pathname);
  }

  render() {
    const {questions} = this.state;
    const { userinfo, steps } = this.props;
    if (userinfo.accessLevel < 3) {
      this.props.history.push("/dashboard");
    }
  
    return (
      <div className="main">
        <div className="main-left">
          <div className="main-left-link">
            <Link className="vertical-nav-link" to="/admin/users">
              Users
            </Link>
          </div>
          <div className="main-left-link">
            <Link className="vertical-nav-link" to="/admin/questions">
              Questions
            </Link>
          </div>
          <div className="main-left-link">
            <Link className="vertical-nav-link" to="/admin/gradeing">
              Steps
            </Link>
          </div>
        </div>
        <div className="main-right">
          <Route
            path="/admin/users"
            exact
            render={props => <AdminUsers submitUser={this.submitUser} />}
          />
          <Route
          path="/admin/questions"
          exact
          render={props => <AdminQuestionForm questions={questions} steps={steps} deleteQuestion={this.deleteQuestion} submitQuestion={this.submitQuestion} />}
        />
        </div>
      </div>
    );
  }
}

export default withRouter(Admin);
