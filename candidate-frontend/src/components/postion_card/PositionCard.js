import React from 'react';
import styled from 'styled-components';
const PositionCard = ({title}) => {

    const statusContainer = styled.div`
    display:flex;
    padding:10px;
    `
    const cardSection = styled.div`
    display: flex;
    align-items: center;
    justify-conternt: center;
    `

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

export default PositionCard;