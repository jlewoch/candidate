// Postings
export const selectPostings = ({ job_postings, applications, positions }) => {
  let job = Object.values(job_postings.postings)
  if (
    objLengthCheck(job_postings.postings) &&
    objLengthCheck(positions) &&
    objLengthCheck(applications.apps)
  ) {
    job = Object.values(job_postings.postings).map(post => {
      let temp = post
      temp.postingTitle = positions[post.position].title
      temp.totalApps = Object.values(applications.apps).filter(
        app => app.job_posting === post._
      ).length
      return temp
    })
  }
  return job
}
export const selectPosting = ({ job_postings, positions }) => {
  if (objLengthCheck(job_postings.postings) && objLengthCheck(positions)) {
    let job = job_postings.postings[job_postings.selected]
    job.postingTitle = positions[job.position].title
    return job
  }
}
export const selectAssigned = state => {}

// Employees
export const selectDirectReports = state => {}

// Applications
export const selectFilteredApps = state => {
  const { apps, filterValues } = state.applications
  const { postings, selected } = state.job_postings
  return filterValues.length === 0
    ? Object.values(apps)
      .filter(app => app.job_posting === selected)
      .map(app => addTitlesToApp(state, app))
    : Object.values(apps).reduce((acc, next) => {
      if (
        filterValues.find(val => next.status === val.level) &&
          next.job_posting === selected
      ) {
        acc = acc.concat(addTitlesToApp(state, next))
      }
      return acc
    }, [])
}
const addTitlesToApp = ({ steps, job_postings, positions }, obj) => {
  if (
    objLengthCheck(job_postings.postings) &&
    objLengthCheck(positions) &&
    objLengthCheck(steps)
  ) {
    obj.jobTitle =
      positions[job_postings.postings[obj.job_posting].position].title
    obj.statusTitle = Object.values(steps).find(
      step => step.level === obj.status
    ).name
  }
  return obj
}
// Applicants
export const selectApplicant = ({ applicants, applications }) => {
  if (
    objLengthCheck(applicants.applicants) &&
    objLengthCheck(applications.apps)
  ) {
    let temp = applicants.applicants[applicants.selected]
    temp.applications = Object.values(applications.apps).filter(
      app => app.applicant === applicants.selected
    )

    temp.phone = formatPhoneNumber(temp.phone)
    return temp
  }
}
const formatPhoneNumber = phone => {
  if (phone.length === 10) {
    let temp = phone.match(/^(\d{3})(\d{3})(\d{4})$/)
    return '1 ' + '(' + temp[1] + ') ' + temp[2] + '-' + temp[3]
  } else {
    return phone
  }
}
// Documents

// Misc
const objLengthCheck = obj => {
  return Object.keys(obj).length > 0
}
