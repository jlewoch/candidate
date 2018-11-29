import React from 'react'
import { Route, Switch } from 'react-router'
import styled from 'styled-components'
import ApplicantCard
  from '../components/applicants/applicant_card/ApplicantCard'
import { Applicants } from '../components/applicants'

const Main = () => {
  const MainDiv = styled.div`

    `
  return (
    <MainDiv>
      <Applicants />
    </MainDiv>
  )
}

export default Main
