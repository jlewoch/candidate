import JobPostingsDisplay from './JobPostingsDisplay'
import { connect } from 'react-redux'
import { getSteps } from '../../store/steps/actions'
import {
  getJobPostings,
  changeSelectedJob
} from '../../store/job_postings/actions'
import { getApplicants } from '../../store/applicants/actions'
import { getApplications } from '../../store/applications/actions'
import { getPositions } from '../../store/positions/actions'
import { selectPostings, selectFilteredApps } from '../../store/selectors'
import { getResumeEvaluations } from '../../store/resume_evaluations/actions'
import { getFirstInterviewEvaluations } from '../../store/first_interview_evaluations/actions'
import { getPhoneEvaluations } from '../../store/phone_evaluations/actions'
import { getSecondInterviewEvaluations } from '../../store/second_interview_evaluations/actions'
const mapStateToProps = state => ({
  job_postings: selectPostings(state),
  selectedPosting: state.job_postings.selected
})
const mapDispatchToProps = dispatch => ({
  getAll: () => {
    dispatch(getApplicants())
    dispatch(getPositions())
    dispatch(getSteps())
    dispatch(getJobPostings())
    dispatch(getApplications())
    dispatch(getResumeEvaluations())
    dispatch(getPhoneEvaluations())
    dispatch(getFirstInterviewEvaluations())
    dispatch(getSecondInterviewEvaluations())
  },
  changeSelectedPosting: e => dispatch(changeSelectedJob(e))
})

export const JobPostings = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobPostingsDisplay)
