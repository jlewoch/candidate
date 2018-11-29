import React from 'react'
import NavLink from '../../../shared_components/nav_link/NavLink'
import PositionsList from '../positionsList/PositionsList'
import styled from 'styled-components'
const AllPositions = () => {
  const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:center;
    height: 100%;
    padding:1.5rem;
    `
  return (
    <Container>

      <PositionsList label='Unassigned' />

      <PositionsList label='Assigned To Me' />

      <PositionsList label='Closed' />

    </Container>
  )
}

export default AllPositions
