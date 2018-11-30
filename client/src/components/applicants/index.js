import ApplicantDisplay from './Applicants'
import { connect } from 'react-redux'
import './applicants.css'

const mapStateToProps = state => ({
  applicants: applicants
})
const mapDispatchToProps = dispatch => ({})

export const Applicants = connect(mapStateToProps, mapDispatchToProps)(
  ApplicantDisplay
)

const applicants = {
  145223: {
    name: '145223',
    position: 'UX Designer',
    rank: 3.5,
    status: 'active',
    actionRequired: 'Yes'
  },
  145224: {
    name: '145224',
    position: 'UX Designer',
    rank: 3.5,
    status: 'active',
    actionRequired: 'Yes'
  },
  145225: {
    name: '145225',
    position: 'UX Designer',
    rank: 3.5,
    status: 'active',
    actionRequired: 'Yes'
  },
  145226: {
    name: '145226',
    position: 'UX Designer',
    rank: 3.5,
    status: 'active',
    actionRequired: 'Yes'
  },
  145227: {
    name: '145227',
    position: 'UX Designer',
    rank: 3.5,
    status: 'active',
    actionRequired: 'Yes'
  },
  145228: {
    name: '145228',
    position: 'UX Designer',
    rank: 3.5,
    status: 'active',
    actionRequired: 'Yes'
  }
}
