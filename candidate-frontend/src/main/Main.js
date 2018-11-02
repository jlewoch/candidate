import React from 'react'
import { Route, Switch } from 'react-router'
import styled from 'styled-components'

import ApplicantCard
  from '../components/applicants/applicant_card/ApplicantCard'
import ApplicantProgress
  from '../components/applicants/applicant_progress/ApplicantProgress'
const Main = () => {
  const MainDiv = styled.div`

    `
  return (
    <MainDiv>
      <ApplicantProgress />
    </MainDiv>
  )
}

export default Main
