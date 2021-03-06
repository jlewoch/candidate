export const create = (section, data) => {
  return fetch(`http://localhost:8000/db/${section}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      authToken: localStorage.getItem('authToken')
    }
  })
    .then(data => data.json())
    .catch(err => console.log(err))
}
export const update = (section, data) => {
  return fetch(`http://localhost:8000/db/${section}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      authToken: localStorage.getItem('authToken')
    }
  })
    .then(data => data.json())
    .catch(err => console.log(err))
}

export const destroy = (section, data) => {
  return fetch(`http://localhost:8000/db/${section}`, {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      authToken: localStorage.getItem('authToken')
    }
  })
    .then(data => data.json())
    .catch(err => console.log(err))
}
export const get = section => {
  return fetch(`http://localhost:8000/db/${section}`, {
    headers: {
      'Content-Type': 'application/json',
      authToken: localStorage.getItem('authToken')
    }
  })
    .then(data => data.json())
    .catch(err => console.log(err))
}
