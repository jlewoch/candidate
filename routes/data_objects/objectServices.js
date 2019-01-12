const convertToObject = (data, objectStructure) => {
  let temp = {}
  for (let i = 0; i < data.length; i++) {
    const element = data[i]
    temp[element.id] = objectStructure(element)
  }
  return temp
}
const formatPhoneNumber = phone => {
  if (phone.length === 10) {
    let temp = phone.match(/^(\d{3})(\d{3})(\d{4})$/)
    return '1 ' + '(' + temp[1] + ') ' + temp[2] + '-' + temp[3]
  } else {
    return phone
  }
}
const fullName = (fname, lname) => {
  return fname + ' ' + lname
}
const formatToDate = date => new Date(date).toLocaleDateString('en-us')
const formatToTime = date => new Date(date).toLocaleTimeString('en-us')
module.exports = {
  convertToObject,
  formatPhoneNumber,
  fullName,
  formatToDate,
  formatToTime
}
