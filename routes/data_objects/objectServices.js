
const convertToObject = (data, objectStructure) => {
  let temp = {}
  for (let i = 0; i < data.length; i++) {
    const element = data[i]
    temp[element.id] = objectStructure(element)
  }
  return temp
}


module.exports = {
  convertToObject
}
