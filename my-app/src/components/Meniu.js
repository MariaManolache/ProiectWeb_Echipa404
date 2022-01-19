import{useNavigate} from "react-router";
import React, {useState, useEffect} from 'react';


const SERVER = 'http://localhost:8000'

const Meniu=()=>{
    const navigate=useNavigate();
   
    let email=""
    let parola=""
    let nume=""
    let id =""
    email=localStorage.emailStudent
    parola=localStorage.parolaStudent
    nume=localStorage.numeStudent
    id = localStorage.idStudent
   
    // console.log(parola)
    return(

      <>
    <div>
    
    </div>
       <div >
      
      Welcome, {nume}
    </div>

      <p>
          Meniu
      </p>
      <button id="butonTester" onClick={
          ()=>{
              navigate("/suntTester");
          }
      }
      >Sunt tester</button>
      <button id="butonMP" onClick={
          ()=>{
              
              navigate("/suntMP");
          }
      }
      >Sunt MP</button>
      <button id="butonDevinoTester" onClick={
          ()=>{
              navigate("/devinTester");
          }
      }
      >Devino tester</button>
      </>
    );
};

export default Meniu;