import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import NoneDocumentGrading from "./nonDocumentGrading/NoneDocumentGrading";
import DocumentGrading from "./documentGrading/DocumentGrading";

class Grading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      submitError: false,
      updated: false,
      application:{}
    };
  }
  skipStep = e => {
    const data = {};
    if (e.target.innerHTML === "Skip &gt;&gt;") {
      data.skipped = 1;
    }

    fetch(
      `https://candidate-application.herokuapp.com/db/steps/evaluation/${this.props.applicationId}/${
        this.props.currentStep
      }`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          authToken: localStorage.getItem("session")
        }
      }
    )
      .then(data=>{

        if (this.props.currentStep < this.props.steps.length) {
          this.props.history.push(`/positions/${this.props.positionId}/applicants/${this.props.applicationId}/evaluation/${parseInt(this.props.currentStep) + 1}`)
        } else {
          this.props.history.push(`/positions/${this.props.positionId}/applicants/`)
        }
       
    })
      .catch(err => console.log(err));
  };

  submitGrading = () => {
    const data = {};
    this.state.questions.filter(item => item.providedGrade).length ===
    this.state.questions.length
      ? (data.updatedInfo = this.state.questions)
      : this.setState({ submitError: true });
    fetch(
      `https://candidate-application.herokuapp.com/db/questions/evaluation/${
        this.props.applicationId
      }/${this.props.currentStep}`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          authToken: localStorage.getItem("session")
        }
      }
    )
      .then(data => {

        if (this.props.currentStep < this.props.steps.length) {
          this.props.history.push(`/positions/${this.props.positionId}/applicants/${this.props.applicationId}/evaluation/${parseInt(this.props.currentStep) + 1}`)
        } else {
          this.props.history.push(`/positions/${this.props.positionId}/applicants/`)
        }
       
    })
      .catch(err => console.log(err));
  };

  updateGrade = (index, value) => {
    const questionGrade = this.state.questions;
    questionGrade[index].providedGrade = value;
    this.setState({ questions: questionGrade });
  };
  onChange = event => {
    const questionNotes = this.state.questions;

    questionNotes[event.target.id].notes = event.target.value;
    this.setState({ questions: questionNotes });
  };
  saveGrading = () => {
    const data = {};
    data.updatedInfo = this.state.questions
      .filter(item => item.providedGrade)
      .map(item => item);

    fetch(
      `https://candidate-application.herokuapp.com/db/questions/evaluation/${
        this.props.applicationId
      }/${this.props.currentStep}`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          authToken: localStorage.getItem("session")
        }
      }
    )
      .then(resp => resp.json())
      .then(data => this.setState({ submitError: false }))
      .catch(err => console.log(err));
  };
  getQuestions = () => {
    fetch(
      `https://candidate-application.herokuapp.com/db/questions/list/${this.props.applicationId}/${
        this.props.currentStep
      }`,
      {
        signal: this.AbortController.signal,
        method: "GET",
        headers: {
          authToken: localStorage.getItem("session")
        }
      }
    )
      .then(resp => resp.json())
      .then(data => this.setState({ questions: data }))
      .catch(err => console.log(err));
  };
  getApplication = () => {
    fetch(
      `https://candidate-application.herokuapp.com/db/applications/one/${this.props.applicationId}`,
      {
        signal: this.AbortController.signal,
        method: "GET",
        headers: {
          authToken: localStorage.getItem("session")
        }
      }
    )
      .then(resp => resp.json())
      .then(data => this.setState({ application: data }))
      .catch(err => console.log(err));
  };

  closeApplication = () =>{
    this.props.history.push(`/positions/${this.props.positionId}/applicants/`)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentStep !== this.props.currentStep) {
      localStorage.setItem('lastVisited', this.props.location.pathname)
      this.getApplication()
      this.getQuestions();
      this.setState({submitError: false});
      
    }
  }

  componentWillUnmount() {
    this.AbortController.abort();
  }

  componentDidMount() {
    localStorage.setItem('lastVisited', this.props.location.pathname)
    this.AbortController = new window.AbortController();
    this.getQuestions();
    this.getApplication();
  }

  render() {
    const { questions, submitError } = this.state;
    const { applicationId, positionId, currentStep, steps } = this.props;
    if (steps.length < 1) {
      return null;
    }

    return (
      <div className="main-container">
        <div className="main">
          <div className="main-left">
            {steps.map((step, index) => {
              return (
                <div key={index} className={`main-left-link`}>
                  <Link
                    to={`/positions/${positionId}/applicants/${applicationId}/evaluation/${
                      step.progressionLevel
                    }`}
                    className={`vertical-nav-link`}
                  >
                    {step.name}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="main-right">
            <div className="main-right-top">
              <div className="main-right-top__left">
                <h3 className="title">{steps[currentStep -1].name}</h3>
              </div>
              <div className="main-right-top__right">
                <button onClick={this.submitGrading} className="button margin">
                  Submit
                </button>
                <button onClick={this.closeApplication} className="button margin">Close</button>
                <button onClick={this.skipStep} className="button margin">
                  Skip >>
                </button>
              </div>
            </div>
            <h4 className={`error-message ${submitError ? "show" : "hide"}`}>
              All Questions Require a Grade Before Submitting
            </h4>
            {steps[currentStep - 1].type === "Document" ? (
              <DocumentGrading
                updateGrade={this.updateGrade}
                onChange={this.onChange}
                questions={questions}

              />
            ) : (
              <NoneDocumentGrading
                updateGrade={this.updateGrade}
                onChange={this.onChange}
                questions={questions}

              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Grading);
