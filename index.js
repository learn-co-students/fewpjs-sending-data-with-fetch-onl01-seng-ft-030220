// Add your code here
const submitData = (name, email) => {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(resp => {
    return resp.json()
  })
  .then(data => {
    document.body.innerHTML += data.id
  })
  .catch(err =>{
    document.body.innerHTML += err.message
  })
}