import React from 'react';
import styled from 'styled-components';
import PositionCard from './postion_card/PositionCard';
const positions = [
    {
        id: 1,
        title: "Technical Specialist",
        openingDate: "2018-08-10T04:00:00.000Z",
        closingDate: "2018-08-22T04:00:00.000Z",
        priority: "HIGH",
        assignedTo:'Jake Lewochko',
        totalApplications: 36,
        location: 'Toronto, ON'  

    },
    {
        id: 2,
        title: "Technical analyst",
        openingDate: "2018-08-10T04:00:00.000Z",
        closingDate: "2018-08-22T04:00:00.000Z",
        priority: "Future",
        assignedTo:'Jake Lewochko',
        totalApplications: 36,
        location: 'Toronto, ON'

    },
    {
        id: 3,
        title: "accounting",
        openingDate: "2018-08-10T04:00:00.000Z",
        closingDate: "2018-08-22T04:00:00.000Z",
        priority: "Future",
        assignedTo:'Jake Lewochko',
        totalApplications: 36,
        location: 'Toronto, ON'    

    },
    {
        id: 4,
        title: "manager",
        openingDate: "2018-08-10T04:00:00.000Z",
        closingDate: "2018-08-22T04:00:00.000Z",
        priority: "Normal",
        assignedTo:'Jake Lewochko',
        totalApplications: 36,
        location: 'Toronto, ON'    
    }
]
const PositionsList = () => {

    const PositionSection = styled.div`
    background: #f1f1f1;
    padding: 1rem;
    `

    return (
        <PositionSection>
            {positions.map(position=> (<PositionCard 
                title={position.title}
                opened={position.openingDate}
                total={position.totalApplications}
                assigned={position.assignedTo}
                location={position.location}
                />))}
        </PositionSection>
    );
};

export default PositionsList;