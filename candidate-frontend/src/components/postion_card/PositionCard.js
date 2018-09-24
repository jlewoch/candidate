import React from 'react';
import PropTypes from 'prop-types';

const PositionCard = ({title}) => {

    return (
        <div>
        <div>
        <h4>status</h4>
        </div>
        <div>
        <div>
        <h3>title</h3>
        <p>opened: {(new Date()).toLocaleString}</p>
        </div>
        <div>
        <h4>85 applicants</h4>
        <p>Location</p>
        </div>
        <div>
        <p>assigned to</p>
        </div>
        </div>
           
        </div>
    );
};

PositionCard.propTypes = {
    title: PropTypes.string.isRequired,
    opened: propTypes.date.isRequired,
};

export default PositionCard;