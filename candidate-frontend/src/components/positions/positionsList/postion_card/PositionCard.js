import React from 'react'
import styled from 'styled-components'
import '../../../../variables.scss'
const PositionCard = ({status ='NEW', title, opened, total, location, assigned }) => {
  const Container = styled.div`
    diplay:flex;
    flex-direction: column;
    box-shadow: #9e9e9e 2px 3px 9px;
    margin: 1rem;
    transition: .2s; 

    :hover {
      cursor: pointer;
      transform: scale(1.02);

    }
`
  const StatusContainer = styled.div`
    display:flex;
    padding:10px;
    `
  const SectionContainer = styled.div`
    display:flex;
    justify-content: space-between;
    padding:10px;
    `
  const CardSection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    `

  const Heading = styled.p`
    font-weight: bold;
    font-size: .75rem;
    padding:3px 0px;
    margin:0;
    `
  const Info = styled.p`
  padding:3px 0px;
 font-size: .75rem;
    margin:0;
 `
 const Status = styled.p`
 margin: 0;
 font-size: .75rem;
 font-weight: bold;
 `
 opened = new Date(opened).toDateString()
 
  return (
    <Container>
      <StatusContainer>
        <Status>{status}</Status>
      </StatusContainer>
      <SectionContainer>
        <CardSection>
          <Heading>{title}</Heading>
          <Info>Opened on: {opened}</Info>
        </CardSection>
        <CardSection>
          <Heading>{total} Applicants</Heading>
          <Info>{location}</Info>
        </CardSection>
        <CardSection>
          <Info>Assigned to: {assigned}</Info>
        </CardSection>
      </SectionContainer>

    </Container>
  )
}

export default PositionCard
