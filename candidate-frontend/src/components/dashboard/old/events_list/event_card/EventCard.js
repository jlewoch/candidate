import React from 'react'
import styled from 'styled-components'
const EventCard = ({
  start_time,
  end_time,
  title,
  attendees,
  contact_info
}) => {
  const Container = styled.div.attrs({
    draggable: true,
    ondragstart: e => console.log(e)
  })`
      height:90px;
      diplay:flex;
      width:98%;
      flex-direction: column;
      box-shadow: #9e9e9e 2px 3px 9px;
      margin: 1px;
      transition: .2s; 
      background: white;
      :hover {
        cursor: pointer;
        transform: scale(1.02);
  
      }
    `
  const TitleContainer = styled.div`
      height:100%;
      display:flex;
      align-items:center;
    `
  const SectionContainer = styled.div`
      height:100%;
      display:flex;
      flex-direction:column;
      justify-content: space-between;
    `
  const CardSection = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: column;
    `

  const Heading = styled.p`
      font-weight: bold;
      font-size: 1.25rem;
      padding: 0px 10px;
      margin:0;
    `
  const Title = styled.p`
      padding:3px 0px;
      font-size: 1.75rem;
      margin:0;
      font-weight: 600;
    `
  const Info = styled.p`
      margin:0;
      padding 3px 0px;
      font-weight: normal;
      font-size:.75rem;
    `
  const EventCat = styled.div`
      width:3px;
      height: 100%
      background:red;
    `
  return (
    <Container>
      <TitleContainer>
        <EventCat />
        <CardSection>
          <Heading>{start_time}</Heading>
          <Heading>{end_time}</Heading>
        </CardSection>
        <SectionContainer>

          <Title>{title}</Title>

          <Info>attendees: {attendees}</Info>
          <Info>contact info: {contact_info}</Info>

        </SectionContainer>

      </TitleContainer>
    </Container>
  )
}

export default EventCard
