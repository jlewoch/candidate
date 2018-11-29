import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import PositionsNav from "../../positions/positionsNav/PositionsNav";
class Results extends Component {
    constructor(props) {
        super(props);
        this.state={
            applications:[],
            positions:[]
        }
    }
    getApplications = () => {
        fetch(`https://candidate-application.herokuapp.com/db/applications/fullList/${this.props.positionId}`,{
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

      componentDidMount() {
        localStorage.setItem('lastVisited', this.props.location.pathname)
        this.AbortController = new window.AbortController()
          this.getPositions()
          this.getApplications()
      }
      componentDidUpdate(prevProps, prevState) {
        if (prevProps.positionId !== this.props.positionId) {
          this.getApplications()
          
        }
      }
      
  render() {
      const {applications, positions} = this.state
      const { positionId } = this.props
      if (positions.length === 0) {
          return null;
      }

      
    return (
      <div className='main-container'>
      <PositionsNav positionId={positionId} />

      <div className='main'>
        <div className="main-left">
          {positions.map(position => {
            return (
              <div key={position.id} className="main-left-link">
                <Link
                  className="vertical-nav-link"
                  to={`/positions/${position.id}/finalists`}
                >
                  {position.title}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="main-right">
        <div className='main-right-bottom padding'>
        {applications.length !== 0 ? <table className='table'>
          <thead>
              <tr>
                <th>Candidate #</th>
                <th>Overall Score</th>
                <th>Skipped Stages</th>
                <th>Last Reviewed By</th>
              </tr>
            </thead>
            <tbody>
               {applications.map((app, index) => {
                return(<tr key={index}>
                  <td className='grade'>{`Candidate #${app.applicationId}`}</td>
                  <td className='flex-around'><p className={`grade ${app.totalGrade > 80 ? 'high' : ''} ${app.totalGrade < 50 ? 'low' : ''}`}>{`${app.totalProvidedPoints}/${
                    app.totalAvailablePoints
                  } `}</p><p className={`grade ${app.totalGrade > 80 ? 'high' : ''} ${app.totalGrade < 50 ? 'low' : ''}`}>{`${app.totalGrade}%`}</p></td>
                  <td>
                    {app.skipped.map((item, index)=><div className='skipped' key={index}>{item}</div>)}
                  </td>
                  <td>{app.employee}</td>
                </tr>)
              })}
            </tbody> 
          </table> : <div className='general-message-container'><h1 className='general-message'>There are currently no completed applications for this position</h1></div>}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default withRouter(Results);
