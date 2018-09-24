import React from 'react'
import styled from 'styled-components'


const NavLink = ({children}) => {
    const Navlink = styled.a`
    text-decoration:none;
    font-size: .9rem;
    :hover{
        cursor: pointer;
        color: blue;
    }
    `
  return <Navlink>
  {children}
  </Navlink>
}

export default NavLink
