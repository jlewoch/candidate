import React from 'react'
import styled from 'styled-components'
const PositionCard = ({
  status = 'NEW',
  title,
  opened,
  total,
  location,
  assigned
}) => {
  const Container = styled.div.attrs({
    draggable:true,
    ondragstart:(e)=> console.log(e)
  })`
        diplay:flex;
        flex-direction: column;
        box-shadow: #9e9e9e 2px 3px 9px;
        margin: 1rem;
        transition: .2s; 
        background: white;
        border-radius: 12px;
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
    flex-wrap: wrap;
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
  const Info = styled.span`
  padding:3px 0px;
 font-size: .75rem;
    margin:0;
    font-weight: normal;
 `
  const Status = styled.p`
 margin: 0;
 font-size: .75rem;
 font-weight: bold;
 `
  return (
    <Container>
      <StatusContainer>
        <Status>{status}</Status>
      </StatusContainer>
      <SectionContainer>
        <CardSection>
          <Heading>{title}</Heading>
          <Heading>Opened on: <Info>{opened}</Info></Heading>
        </CardSection>
        <CardSection>
          <Heading>Total Applications: <Info>{total}</Info></Heading>
          <Heading>Location: <Info>{location}</Info></Heading>
        </CardSection>
        <CardSection>
          <Heading>Assigned to: <Info>{assigned}</Info></Heading>
        </CardSection>
      </SectionContainer>

    </Container>
  )
}

export default PositionCard
