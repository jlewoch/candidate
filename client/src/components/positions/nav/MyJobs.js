import React from 'react';
import NavLink from '../../../shared_components/nav_link/NavLink';
const MyJobs = () => {

    const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    border-bottom: solid thin lightgray;
    `
    return (
        <Container>
            <NavLink>
            Active
            </NavLink>
            <NavLink>
            Internal
            </NavLink>
            <NavLink>
            Closed
            </NavLink>
        </Container>
    );
};

export default MyJobs;