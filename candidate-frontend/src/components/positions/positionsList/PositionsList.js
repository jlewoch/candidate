import React from 'react'
import styled from 'styled-components'
import PositionCard from '../position_card/PositionCard'
import { positions } from '../../../testdata';

const PositionsList = ({ label = ''}) => {
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
