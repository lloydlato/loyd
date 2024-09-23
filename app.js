function myFunction() {
    alert("The form was submitted");

   let name = document.getElementById("name").value
   let age = document.getElementById("age").value
   let email = document.getElementById("email").value
   let hobby = document.getElementById("hobby").value
   console.log(name)
   console.log(age)
   console.log(email)
   console.log(hobby)

   const user ={
    name: name,
    age: age,
    email: email,
    hobby: hobby
   }
   
   const myJSON = JSON.stringify(user);
   console.log(user)
   console.log(myJSON)
   document.getElementById("jsonOutput").innerHTML  = myJSON
  }