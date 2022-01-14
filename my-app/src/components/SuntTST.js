import{useNavigate} from "react-router";
import React, {useState, useEffect} from 'react';
import Meniu from "./Meniu";
import BugForm from "./BugForm";


const SERVER = 'http://localhost:8000';

const SuntTST=()=>{
    
    const navigate=useNavigate();
    const addUser = async (user) => {
        try{
            
        let res=await fetch(`${SERVER}/students/${localStorage.idStudent}/tsts`, {
          method: 'get',
          headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
          }

        })

        let result = await res.json();

        let res2=await fetch(`${SERVER}/commits/${user.commit}`, {
           method: 'get',
           headers: {
             'Accept':'application/json',
             'Content-Type': 'application/json'
           },
          
         });

         let result2=await res2.json()
         //console.log(result2.ID)
   
        let res3=await fetch(`${SERVER}/tsts/${result.ID}/projects/${result2.projectID}/commits/${result2.ID}/bugs/enrollements`, {
           method: 'post',
           headers: {
             'Accept':'application/json',
             'Content-Type': 'application/json'
           },
          
         
           body: JSON.stringify({
               "status": user.status,
               "severity": user.severity,
               "description": user.description,
               "priority": user.priority
           })
           // To Do :sa facem cerere pe email si parola sa curatam campurile
         })
   
         let result3 = await res3.json();
         
    
        if(res.status===500 || res2.status ===500 || res3.status===500)
        {
          alert("Date incorecte");
        }
        else if(res.status===200)
        {
    
        }
        
      }catch(e){
         alert("Parola sau email incorecte");
      }
    }
      return (
          
        <div>
          <h1>Aplicație web pentru gestionarea rezolvării bug-urilor</h1>
          {/* <UserList /> */}
          <BugForm onAdd={addUser} />
         
    
        </div>
      )
};

export default SuntTST;