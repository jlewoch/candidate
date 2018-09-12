import React from "react";
import { Link } from "react-router-dom";

const PositionsNav = ({positionId}) => {
  return (
    <div className="sub-nav">
      <Link className="horizontal-nav-link" to={`/positions/${positionId}/applicants`}>
        Applicants
      </Link>

      <Link to={`/positions/${positionId}/finalists`} className="horizontal-nav-link">
        Finalists
      </Link>
    </div>
  );
};

export default PositionsNav;
