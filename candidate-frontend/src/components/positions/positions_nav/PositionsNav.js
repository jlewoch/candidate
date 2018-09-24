import React from 'react';
import NavLink from '../../../shared_components/nav_link/NavLink';
const PositionsNav = () => {
    return (
        <div>
            <NavLink>
            Active
            </NavLink>
            <NavLink>
            Internal
            </NavLink>
            <NavLink>
            Closed
            </NavLink>
        </div>
    );
};

export default PositionsNav;