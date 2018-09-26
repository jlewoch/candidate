import React from 'react';
import AllPositions from './nav/AllPositions';
import styled from 'styled-components';
import PositionsList from './positionsList/PositionsList';
const Positions = () => {
  const Container = styled.div`
  height: 95%;
  `
  return (
    <Container>
    <AllPositions />
    </Container>
  );
};

export default Positions;