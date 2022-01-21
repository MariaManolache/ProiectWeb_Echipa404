 //import UserList from './UserList'
 import ProiectForm from './ProiectForm'
 import{useNavigate} from "react-router";
 import React, {useState, useEffect} from 'react';
 const SERVER = 'http://localhost:8000'
 
 function AdaugaProiect () {
//    let [emailStudent, setEmailStudent] = useState()
//    let[parolaStudent, setParolaStudent]=useState()
//    let[numeStudent, setNumeStudent]=useState()
//    let[idStudent, setIdStudent]=useState()
     const navigate=useNavigate();
   const addUser = async (user) => {
     try{
         
     let res=await fetch(`${SERVER}/projects`, {
       method: 'post',
       headers: {
         'Accept':'application/json',
         'Content-Type': 'application/json'
       },
      
     
       body: JSON.stringify({
          
        "projectName": user.projectName,
        "repository": user.repository,
        "teamName":user.teamName
       })
       // To Do :sa facem cerere pe email si parola sa curatam campurile
     })
     let res2=await fetch(`${SERVER}/projects/${user.repository}`, {
        method: 'get',
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
       
    
        // To Do :sa facem cerere pe email si parola sa curatam campurile
      });
      let result2=await res2.json()
      console.log(result2.ID)

     let res1=await fetch(`${SERVER}/students/${localStorage.idStudent}/projects/${result2.ID}/mps/enrollements`, {
        method: 'post',
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
       
      
        body: JSON.stringify({
        })
        // To Do :sa facem cerere pe email si parola sa curatam campurile
      })

      let res3=await fetch(`${SERVER}/students/${user.membru2}/`, {
        method: 'get',
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
       
    
      });

      

      
      let res4=await fetch(`${SERVER}/students/${user.membru3}/`, {
        method: 'get',
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
       
    
      });

      let result3 = await res3.json();
      let result4 = await res4.json();

      let res5=await fetch(`${SERVER}/students/${result3.ID}/projects/${result2.ID}/mps/enrollements`, {
        method: 'post',
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
       
      
        body: JSON.stringify({
        })
      })

      let res6=await fetch(`${SERVER}/students/${result4.ID}/projects/${result2.ID}/mps/enrollements`, {
        method: 'post',
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
       
      
        body: JSON.stringify({
        })
      })
  
     let result=await res.json();
     let result1=await res1.json();
     //console.log(result.email)
     if(res1.status===500 || res3.status ===500 || res4.status===500)
     {
       alert("Parola sau email incorecte");
     }
     else if(res4.status===200&&res1.status===200&&res2.status===200&&res3.status===200&&res5.status===200&&res6.status===200)
     {
    //    setEmailStudent(result.email)  
    //    setParolaStudent(result.password)  
    //    setNumeStudent(result.firstName+" "+result.lastName) 
    //    setIdStudent(result.ID)
    //    localStorage.setItem("emailStudent",result.email)
    //    localStorage.setItem("parolaStudent",result.password)
    //    localStorage.setItem("numeStudent",result.firstName+" "+result.lastName)
    //    localStorage.setItem("idStudent", result.ID)
    //    localStorage.emailStudent=result.email
    //    localStorage.parolaStudent=result.password
    //    localStorage.numeStudent=result.firstName+" "+result.lastName;
    //    localStorage.idStudent=result.ID;
    //    console.log(localStorage.parolaStudent)
       console.log(result)
       
    //    navigate("/meniu");
    alert("Ati adaugat un proiect nou!");
     }
     
   }catch(e){
      alert("Parola sau email incorecte");
   }
 }
   return (
       
     <div>
       <h1>Adauga un proiect</h1>
       {/* <UserList /> */}
       <ProiectForm onAdd={addUser} />
      
 
     </div>
   )
 }
 
 export default AdaugaProiect
 