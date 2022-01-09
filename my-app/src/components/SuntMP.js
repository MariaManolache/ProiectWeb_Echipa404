import{useNavigate} from "react-router";
import React, {useState, useEffect} from 'react';
import Meniu from "./Meniu";


const SERVER = 'http://localhost:8000'

const SuntMP=()=>{
    
    const navigate=useNavigate();
    const addUser = async () => {
        
        let res=await fetch(`${SERVER}/students/${localStorage.emailStudent}/students/${localStorage.parolaStudent}`, {
          method: 'get',
          headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
          },
         
        
          // body: JSON.stringify(user)
          // To Do :sa facem cerere pe email si parola sa curatam campurile
        })
        console.log(res.status)
    }
    let email=""
    let parola=""
    let nume=""
    email=localStorage.emailStudent
    parola=localStorage.parolaStudent
    nume=localStorage.numeStudent
  
    console.log(parola)
    return(

      <>
    <div>
   {addUser}
    </div>
       <div >
      
      Welcome, {nume}
    </div>

      <p>
          Membru Proiect
      </p>
      <button id="butonAdaugaProiect" onClick={
          ()=>{
              navigate("/adaugaProiect");
          }
      }
      >Adauga Proiect</button>
      <button id="butonVizualizeazaProiecte" onClick={
          ()=>{
              navigate("/vizualizareProiecte");
          }
      }
      >Vizualizeaza proiecte</button>
      
      </>
    );
};

export default SuntMP;