import React from 'react'
import styled from 'styled-components'

const Menu = ({ name, image }) => {
  const Container = styled.div`
  position: realative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    :hover{
        cursor:pointer;
    }
    `
  const ProfilePic = styled.img.attrs({
    src: require('./1.jpg')
  })`
        border-radius: 50%;
        height: 25px;
        background:black;
        margin:3px;
        
    `
  const Name = styled.p`
    font-size: .75rem;
    font-weight: bold;
    `

  const Arrow = styled.svg`
    transition: all .5s;
    ${Container}:hover &{
      transform: rotate(90deg)
    }
    `
  const MenuItem = styled.p`
    font-size: .75rem;
    font-weight: bold;
    padding: 10px 15px;
    text-align: center;
    display:flex;
    `
  const MenuList = styled.div`
    display:flex;
    flex-direction:column;
    position: realative;

    text-align:center;
    
`

  return (

      <Container>
        <ProfilePic />
        <Name>
          Jake Lewochko
        </Name>
        <Arrow
          height='20px'
          width='15px'
          stroke='#55B1C3'
          strokeWidth='2'
          fill='none'
        >
        <polyline points='5 15, 10 10, 5 5' />

         
        </Arrow>

      </Container>
      

  )
}

export default Menu
