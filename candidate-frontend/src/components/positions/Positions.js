import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PositionsNav from "./positionsNav/PositionsNav";
import PositionsMain from "./positionsMain/PositionsMain";

class Positions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: [],
      positions: [],
      limit: 10,
      offset: 0
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
        this.setState({
          positions: data
        });
      })
      .catch(err => {
        console.error(err);
      });
  };
  getApplications = () => {
    fetch(
      `https://candidate-application.herokuapp.com/db/applications/list/${
        this.props.selectedPosition
      }`
      ,{
       signal:this.AbortController.signal,

        method:'GET',
        headers:{
          authToken: localStorage.getItem('session')
        }
      })
      .then(result => result.json())
      .then(data => {
        this.setState({
          applications: data
        });
      })
      .catch(err => {
        console.error(err);
      });
  };
  componentWillUnmount() {
    this.AbortController.abort()
  }
  
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedPosition !== this.props.selectedPosition) {
      this.getApplications();
      localStorage.setItem('lastVisited', this.props.location.pathname)
    }
  }

  componentDidMount() {
    this.AbortController = new window.AbortController()
    localStorage.setItem('lastVisited', this.props.location.pathname)
    this.getPositions();
    this.getApplications();
  }
  render() {
    const { positions, applications } = this.state;
    const { selectedPosition } = this.props;
    if (positions.length < 1) {
      return <h1>Loading</h1>;
    }

    return (
      <div className="main-container">
        <PositionsNav positionId={selectedPosition} />
        <div className="main">
          <div className="main-left">
            {positions.map(position => {
              return (
                <div key={position.id} className="main-left-link">
                  <Link
                    className="vertical-nav-link"
                    to={`/positions/${position.id}/applicants`}
                  >
                    {position.title}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="main-right">
   
            <PositionsMain applications={applications} positionTitle={positions[selectedPosition - 1]} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Positions);
