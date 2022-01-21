 //import UserList from './UserList'
 import TSTForm from './TSTForm'
 import{useNavigate} from "react-router";
 import React, {useState, useEffect} from 'react';
 const SERVER = 'http://localhost:8000'
 
 function DevinTST () {

   const addUser = async (user) => {
     try{
         
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

     let res1=await fetch(`${SERVER}/students/${localStorage.idStudent}/projects/${result2.ID}/tsts/enrollements`, {
        method: 'post',
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
       
      
        body: JSON.stringify({
        })
        // To Do :sa facem cerere pe email si parola sa curatam campurile
      })

     

     let result1=await res1.json();
     //console.log(result.email)
     if(res2.status===500)
     {
       alert("Repository incorect");
     }
     else if(res2.status===200)
     {
      alert("Acum sunteti tester pentru proiectul dorit");
     }
     
   }catch(e){
      alert("Parola sau email incorecte");
   }
 }
   return (
       
     <div>
       <h3>Introduceti repository-ul pentru proiectul la care doriti sa deveniti tester</h3>
       {/* <UserList /> */}
       <TSTForm onAdd={addUser} />
      
 
     </div>
   )
 }
 
 export default DevinTST;
 