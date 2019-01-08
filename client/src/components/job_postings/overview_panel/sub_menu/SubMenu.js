import React from 'react'
import ApplicationsSubMenu from './ApplicationsSubMenu'
import CommunicationsSubMenu from './CommunicationsSubMenu'
import SummarySubMenu from './SummarySubMenu'
const SubMenu = ({ selectedSub }) => {
  switch (selectedSub) {
    case 'Applications':
      return <ApplicationsSubMenu />
    case 'Communications':
      return <CommunicationsSubMenu />
    default:
      return <SummarySubMenu />
  }
}

export default SubMenu
