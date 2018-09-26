import React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import SideWorkPanel from '../shared_components/side_panel/SideWorkPanel';
import Positions from '../components/positions/Positions';
import { MainNav } from '../components/main_nav';
const Main = () => {
    const MainDiv = styled.div`
    height: 100%;
    `
    return (
        <MainDiv>
        <MainNav />
        <Positions />
        </MainDiv>
    );
};

export default Main;