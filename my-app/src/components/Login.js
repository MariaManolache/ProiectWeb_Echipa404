 //import UserList from './UserList'
import UserForm from './UserForm'
import{useNavigate} from "react-router";
import React, {useState, useEffect} from 'react';
const SERVER = 'http://localhost:8000'

function Login () {
  let [emailStudent, setEmailStudent] = useState()
  let[parolaStudent, setParolaStudent]=useState()
  let[numeStudent, setNumeStudent]=useState()
    const navigate=useNavigate();
  const addUser = async (user) => {
    try{
    let res=await fetch(`${SERVER}/students/${user.email}/students/${user.parola}`, {
      method: 'get',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
     
    
      // body: JSON.stringify(user)
      // To Do :sa facem cerere pe email si parola sa curatam campurile
    })
 
    let result=await res.json();
    //console.log(result.email)
    if(res.status===500)
    {
      alert("Parola sau email incorecte");
    }
    else if(res.status===200)
    {
      setEmailStudent(result.email)  
      setParolaStudent(result.password)  
      setNumeStudent(result.firstName+" "+result.lastName) 
      localStorage.setItem("emailStudent",result.email)
      localStorage.setItem("parolaStudent",result.password)
      localStorage.setItem("numeStudent",result.firstName+" "+result.lastName)
      localStorage.emailStudent=result.email
      localStorage.parolaStudent=result.password
      localStorage.numeStudent=result.firstName+" "+result.lastName;
      console.log(localStorage.parolaStudent)
      console.log(result)
      
      navigate("/meniu");

    }
    
  }catch(e){
     alert("Parola sau email incorecte");
  }
}
  return (
      
    <div>
      <h1>Aplicație web pentru gestionarea rezolvării bug-urilor</h1>
      {/* <UserList /> */}
      <UserForm onAdd={addUser} />
     

    </div>
  )
}

export default Login
