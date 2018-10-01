export const get = (url) => fetch(`http://localhost:9000/db/${url}`,{
    headers:{
        'Content-Type': 'application/json',
        authToken: localStorage.getItem("session")
    }
}).then(res=>res.json()).then(data=>data)

export const update = (url) => fetch(`http://localhost:9000/db/${url}`,{
    method: 'PUT',
    headers:{
        'Content-Type': 'application/json',
        authToken: localStorage.getItem("session")
    }
}).then(res=>res.json()).then(data=>data)

export const push = (url) => fetch(`http://localhost:9000/db/${url}`,{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
        authToken: localStorage.getItem("session")
    }
}).then(res=>res.json()).then(data=>data)

export const remove = (url) => fetch(`http://localhost:9000/db/${url}`,{
    method: 'DELETE',
    headers:{
        'Content-Type': 'application/json',
        authToken: localStorage.getItem("session")
    }
}).then(res=>res.json()).then(data=>data)