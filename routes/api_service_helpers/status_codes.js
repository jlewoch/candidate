const OK = { code: 200, message: 'Successful' }
const CREATED = { code: 201, message: 'Successfully Created' }
const ACCEPTED = { code: 202, message: 'Request Accepted' }

const BAD_REQUEST = { code: 400, message: 'Invalid Request' }
const UNAUTHORIZED = {
  code: 401,
  message: 'You are Unauthorized speak with your administrator'
}
const FORBIDDEN = { code: 403, message: 'Forbidden' }
const NOT_FOUND = { code: 404, message: 'Not Found' }
module.exports = {
  OK,
  CREATED,
  ACCEPTED,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND
}
