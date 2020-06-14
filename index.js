function formData(x,y) {
    return {
        name: x,
        email: y
    }
}


function configObj(name,email) {
    return {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData(name,email))
    }
}

function submitData(name, email) {
    return fetch("http://localhost:3000/users", configObj(name, email))
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        document.querySelector("body").innerHTML+=object["id"]
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        document.body.innerHTML+=error.message
    })
}
