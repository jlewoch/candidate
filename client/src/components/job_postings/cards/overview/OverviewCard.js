import React from 'react'
import OverviewAppSub from './sub_cards/OverviewAppSub'
import OverviewComSub from './sub_cards/OverviewComSub'
import OverviewSumSub from './sub_cards/OverviewSumSub'
const OverviewCard = ({}, selectedSub) => {
  const sub = () => {
    switch (selectedSub) {
      case 'Applications':
        return <OverviewAppSub />
        break
      case 'Commpunications':
        return <OverviewComSub />
        break
      case 'Summary':
        return <OverviewSumSub />
        break
    }
  }
  return (
    <div className='overview-card'>
      <div className='overview-card-top'>
        <div className='overview-card-top-left'>
          <img
            src={require('../1.jpg')}
            alt=''
            className='overview-card-photo'
          />
        </div>
        <div className='overview-card-top-right'>
          <h5 className='title'>fullname</h5>
          <p className='title'>phone</p>
          <p className='title'>email</p>
          <p className='title'>linkedIn</p>
          <p className='title'>Github</p>
        </div>
      </div>
      <div className='overview-card-middle'>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
      <div className='overview-card-bottom'>{sub()}</div>
    </div>
  )
}

export default OverviewCard
