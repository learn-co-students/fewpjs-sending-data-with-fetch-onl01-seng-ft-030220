// Add your code here
function submitData(name, email){
    let formData = {
        name: name,
        email: email
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    
        body:JSON.stringify(formData)
        .then(function(response) {
            return response.json();
        })

        /then(function(object) {
            document.body.innerHTML = object["id"]

        })
        
        .catch(function(object) {
            alert ("Unauthorized Access");
            document.body.innerHTML = error.message
        })
    }
}