import{useNavigate} from "react-router";
import React, {useState, useEffect} from 'react';
import Meniu from "./Meniu";


const SERVER = 'http://localhost:8000';

const SuntMP=()=>{
    
    const navigate=useNavigate();
    let email=""
    let parola=""
    let nume=""
    let id="";
    email=localStorage.emailStudent
    parola=localStorage.parolaStudent
    nume=localStorage.numeStudent
    
    id=localStorage.idStudent
    console.log(id)
    fetch(`${SERVER}/students/${id}/mps` , {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json()
      }).then((data) => {
          console.log(data)
          
         
      })
   
  
    //console.log(parola)
    console.log('a')
    return(
      <>
       <h2 >
      Welcome, {nume}
    </h2>

      <div id="mp">
      <button id="butonAdaugaProiect" onClick={
          ()=>{
              navigate("/adaugaProiect");
          }
      }
      >Adauga Proiect</button>
      <button id="butonVizualizeazaProiecte" onClick={
          ()=>{
              navigate("/proiectList");
              
          }
      }
      >Vizualizeaza proiecte</button>
      </div>
      </>
    );
};

export default SuntMP;