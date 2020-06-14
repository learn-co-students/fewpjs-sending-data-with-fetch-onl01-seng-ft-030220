// // Add your code here
// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };
   
// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };
   
// fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

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
        debugger
        document.querySelector("body").innerHTML+=object["id"]
        console.log(object)
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
        document.body.innerHTML+=error.message
    })
}
submitData("Sam","sam@sam.com")

  // create POST request - submitData(), 2 arguments = user's name & user's email - Done
  // write you solution so that submitData returns the fetch()
  
  // Test 1
  // write a valid POST request to http://localhost:3000/users using fetch()
  // include: 
  // 1) The destination URL
  // 2) Headers for 'Content-Type' and 'Accept' set to 'application/json'
  // 3) A body with the name and email passed in as arguments to submitData. These should be assigned to name and email keys within an object. This object should then be stringified.
  
  // Test 2
