import React, { Component } from 'react'
import styled from 'styled-components'
import anime from 'animejs'
class SideWorkPanel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggle = () => {
    this.animation()
    this.setState({ open: !this.state.open })

  }
  animation = () => {
    console.log(this.state.open);
    
    if (this.state.open) {
      anime({
        targets: '#bar',
        translateX: 0,
        duration: 1000,
        easing: 'easeInOutQuad'
      })
    } else {
      anime({
        targets: '#bar',
        translateX: -285,
        duration: 1000,
        easing: 'easeInOutQuad'
      })
    }
  }
  render () {
    const { open } = this.state


    const Toggle = styled.div.attrs({
      onClick: () => this.toggle
    })`
    display:flex;
    align-items: center;
    justify-content:center;
    height: 80px;
    margin-top: 100px;
    width: 15px;
    background:#f1f1f1;
    border-radius: 0px 10px 10px 0px;
    :hover{
      cursor: pointer;
    }
    `

    const Arrow = styled.svg`
    transition: .5s;
    
      transform: ${open ? '' : 'rotate(180deg)'}
    
    `
    const WorkPanel = styled.div`
    width: 285px;
    overflowY: scroll;
    background: #f1f1f1;
    `
    return (
      <div style={{ display:'flex', height: '100%', width: '300px'}} id="bar">

        <WorkPanel>
          {this.props.children}
        </WorkPanel>
        <Toggle>
          <Arrow
            height='20px'
            width='15px'
            stroke='#55B1C3'
            strokeWidth='2'
            fill='none'
          >
            <polyline points='5 15, 10 10, 5 5' />

          </Arrow>
        </Toggle>
      </div>

    )
  }
}

export default SideWorkPanel
