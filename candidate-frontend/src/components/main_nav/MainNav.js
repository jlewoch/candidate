import React from 'react';
import styled from 'styled-components';
import Menu from './menu/Menu';
import NavLink from '../../shared_components/nav_link/NavLink';

const MainNav = () => {
    const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    border-bottom: solid thin lightgray;
    `
    const LeftSide = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-around;
    padding:10px;
    width: 75%;
    `
    const RightSide = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding:10px;
    `

    const Logo = styled.p`
    `

    const MenuContainer = styled.div`
    
    `
    return (
        <Container>
            <LeftSide>
            CANDIDATE
            <NavLink>
            DashBoard
            </NavLink>
            <NavLink>
            Positions
            </NavLink>
            <NavLink>
            Applications
            </NavLink>
            <NavLink>
            Inbox
            </NavLink>
            <NavLink>
            Calendar
            </NavLink>
            <NavLink>
            Admin
            </NavLink>
            </LeftSide>
            <RightSide>
            <Menu />
            
            
            </RightSide>
        </Container>
    );
};

export default MainNav;