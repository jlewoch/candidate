const table = require('./required_fields_list')
const { BAD_REQUEST } = require('../../routes/api_service_helpers/status_codes')
const confirmValid = (req, res, next) => {
  objs.weightLeft(req.body.step).then(left => {
    req.body,
    req.body.enabled && req.body.weight && req.body.weight <= left
      ? next()
      : res
        .status(BAD_REQUEST.code)
        .json(
          BAD_REQUEST.message +
                `there is ${left}% weight left for the selected step`
        )
  })
}

const checkRequiredFields = (req, res, next) => {
  // pulls path from base url and selects array to compare from file
  table = table[req.baseUrl.split('/').pop()]

  if (
    Object.keys(req.body)
      .sort()
      .join('') !== table.sort().join('')
  ) {
    // returns missing fields by comparing the 2 arrays
    let missing = getFields(req.body, table)

    res
      .status(BAD_REQUEST.code)
      .json(
        BAD_REQUEST.message +
          ` The ${
            missing.length > 1
              ? missing.slice(0, missing.length - 1).join(', ') +
                ` and ${missing.pop()} fields are missing`
              : missing.join('') + ' field'
          }`
      )
  } else {
    next()
  }
}
const getFields = (body, required) => {
  return Object.keys(body)
    .concat([], required)
    .sort()
    .reduce((acc, next) => {
      if (acc && next === acc[0]) {
        acc.shift()
      } else {
        acc = [next, ...acc]
      }
      return acc
    }, [])
}
const checkForInvalidFields = () => {}
module.exports = {
  checkRequiredFields,
  confirmValid
}
