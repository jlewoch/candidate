import React from "react";
import { Link } from 'react-router-dom';
import "./PositionsMain.css";
const PositionsMain = ({ applications, positionTitle }) => {

  
  if (applications.length === 0) {
    return (
      <div className="general-message-container">
        <h1 className="title">
          This Postion Currently has no Applications
        </h1>
      </div>
    );
  }
  return (
    <div>
      <div className="main-right-top">
        <div className="main-right-top__left">
          <h2 className='title'>{positionTitle.title}</h2>
        </div>
        <div className="main-right-top__right">
          <select>
            <option value="all">All</option>
            <option value="progression">Progression</option>
          </select>
        </div>
      </div>
      <div className="main-right-bottom">
        <table className="table">
          <thead>
            <tr>
              <th>Application</th>
              <th>Status</th>
              <th>Date Submitted</th>
              <th>Last Updated</th>
              <th>Updated By</th>
            </tr>
          </thead>
          <tbody>
            {applications.map(application => {
              return (
                <tr key={application.appId}>
                  <td><Link to={`/positions/${application.positionId}/applicants/${application.appId}/evaluation/${application.currentStep ? application.currentStep : 1}`}  className='table-link'>{`Application # ${application.appId}`}</Link></td>
                  <td>{application.status}</td>
                  <td>{new Date(application.created).toDateString()}</td>
                  <td>{new Date(application.updated).toDateString()}</td>
                  <td>
                    {application.fName
                      ? `${application.fName} ${
                          application.lName
                        }`
                      : "N/A"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PositionsMain;
