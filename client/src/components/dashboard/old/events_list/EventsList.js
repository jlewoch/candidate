import React from 'react';
import EventCard from './event_card/EventCard';
import styled from 'styled-components';
const EventsList = ({appointments}) => {
const EventContainer = styled.div`
margin 10px;
width:33%
display:flex;
align-items:center;
flex-direction:column;
    overflow-y: scroll;
    height: 100%;
    border-radius: 12px;

    ::-webkit-scrollbar {
        width: 5px;
        
    }

    ::-webkit-scrollbar-track {
        box-shadow: none;
        
    }
     
    ::-webkit-scrollbar-thumb {
        background: #55B1C3; 
        border-radius: 10px;
        height: 20px;
    }
`

    return (
        <EventContainer>
        <h2>Schedule</h2>
            <EventCard start_time='8:00 AM' end_time='9:00 AM' title='Meeting' attendees='me, jim, kim, sam' contact_info='123-123-1234' />
            <EventCard start_time='8:00 AM' end_time='9:00 AM' title='Meeting' attendees='me, jim, kim, sam' contact_info='123-123-1234' />
            <EventCard start_time='8:00 AM' end_time='9:00 AM' title='Meeting' attendees='me, jim, kim, sam' contact_info='123-123-1234' />
            <EventCard start_time='8:00 AM' end_time='9:00 AM' title='Meeting' attendees='me, jim, kim, sam' contact_info='123-123-1234' />
            <EventCard start_time='8:00 AM' end_time='9:00 AM' title='Meeting' attendees='me, jim, kim, sam' contact_info='123-123-1234' />
            <EventCard start_time='8:00 AM' end_time='9:00 AM' title='Meeting' attendees='me, jim, kim, sam' contact_info='123-123-1234' />
        </EventContainer>
    );
};

export default EventsList;