import React from "react";
import { Link } from "react-router-dom";
const DashOpenJobs = ({ positions }) => {
  return (
    <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Opening Date</th>
        <th>Closing Date</th>
      </tr>
      </thead>
      <tbody>
      {positions.map(position => {
        return (
          <tr key={position.id}>
            <td>
              <Link
                className="table-link"
                to={`/positions/${position.id}/applicants`}
              >
                {position.title}
              </Link>
            </td>
            <td>{new Date(position.openingDate).toDateString()}</td>
            <td>{new Date(position.closingDate).toDateString()}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};

export default DashOpenJobs;
