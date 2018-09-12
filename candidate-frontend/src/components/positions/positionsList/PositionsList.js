import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
class PositionsList extends Component {
constructor(props) {
    super(props);
    this.state = {
        positions:[],
    }
}
getPositions = () => {
    fetch("https://candidate-application.herokuapp.com/db/positions/list",{
        method:'GET',
        signal:this.AbortController.signal,
        headers:{
          authToken: localStorage.getItem('session')
        }
      })
      .then(result => result.json())
      .then(data => {
        this.setState({
          positions: data,
        });
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
   
      this.getPositions()
  }
  
    render() {
        const {positions} = this.state;
        if (positions.length < 1) {
            return(null)
          }
        return ( <div className='list-main-container'>
        <div className='list-container'>
            <table className="table">
            <thead>
            <tr>
            <th>Title</th>
            <th>Opening Date</th>
            <th>Closing Date</th>
            <th>Priority</th>
            </tr>
            </thead>
            <tbody>
                {positions.map(position=>{
                    return(
                        <tr key={position.id}>
                        <td><Link className='table-link' to={`/positions/${position.id}/applicants`}>{position.title}</Link></td>
                        <td>{new Date(position.openingDate).toDateString()}</td>
                        <td>{new Date(position.closingDate).toDateString()}</td>
                        <td>{position.priority}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            </div>
            </div>
        );
    }
}

export default withRouter(PositionsList);