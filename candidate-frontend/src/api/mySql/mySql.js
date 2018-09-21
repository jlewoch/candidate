export const get = (url) => fetch(url,{
    headers:{
        'Content-Type': 'application/json',
        authToken: localStorage.getItem("session")
    }
}).then(res=>res.json())

export const put = (url) => fetch(url,{
    method: 'PUT',
    headers:{
        'Content-Type': 'application/json',
        authToken: localStorage.getItem("session")
    }
}).then(res=>res.json())

export const post = (url) => fetch(url,{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
        authToken: localStorage.getItem("session")
    }
}).then(res=>res.json())

export const del = (url) => fetch(url,{
    method: 'DELETE',
    headers:{
        'Content-Type': 'application/json',
        authToken: localStorage.getItem("session")
    }
}).then(res=>res.json())