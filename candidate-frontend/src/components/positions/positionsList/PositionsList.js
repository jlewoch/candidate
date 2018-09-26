import React from 'react'
import styled from 'styled-components'
import PositionCard from './postion_card/PositionCard'
const positions = [
  {
    id: 1,
    title: 'Technical Specialist',
    openingDate: '2018-08-10T04:00:00.000Z',
    closingDate: '2018-08-22T04:00:00.000Z',
    priority: 'HIGH',
    assignedTo: 'Jake Lewochko',
    totalApplications: 36,
    location: 'Toronto, ON'
  },
  {
    id: 2,
    title: 'Technical analyst',
    openingDate: '2018-08-10T04:00:00.000Z',
    closingDate: '2018-08-22T04:00:00.000Z',
    priority: 'Future',
    assignedTo: 'Jake Lewochko',
    totalApplications: 36,
    location: 'Toronto, ON'
  },
  {
    id: 3,
    title: 'accounting',
    openingDate: '2018-08-10T04:00:00.000Z',
    closingDate: '2018-08-22T04:00:00.000Z',
    priority: 'Future',
    assignedTo: 'Jake Lewochko',
    totalApplications: 36,
    location: 'Toronto, ON'
  },
  {
    id: 4,
    title: 'manager',
    openingDate: '2018-08-10T04:00:00.000Z',
    closingDate: '2018-08-22T04:00:00.000Z',
    priority: 'Normal',
    assignedTo: 'Jake Lewochko',
    totalApplications: 36,
    location: 'Toronto, ON'
  }
]
const PositionsList = ({ label = '' }) => {
  const PositionSection = styled.div.attrs({})`
    background: #f1f1f1;
    padding: 1rem;
    margin 10px;
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
  const SectionLabel = styled.h4`
    padding: 0px 1rem;
    margin: 0;
    `

  return (
    <PositionSection>
      <SectionLabel>{label}</SectionLabel>
      {positions.map(position => (
        <PositionCard
          key={position.id}
          id={position.id}
          title={position.title}
          opened={position.openingDate}
          total={position.totalApplications}
          assigned={position.assignedTo}
          location={position.location}
        />
      ))}
    </PositionSection>
  )
}

export default PositionsList
