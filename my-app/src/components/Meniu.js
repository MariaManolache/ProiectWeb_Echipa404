import{useNavigate} from "react-router";
import React, {useState, useEffect} from 'react';


const SERVER = 'http://localhost:8000'

const Meniu=(props)=>{
    const navigate=useNavigate();
    const { onAdd } = props
    let email=""
    let parola=""
    let nume=""
    email=localStorage.emailStudent
    parola=localStorage.parolaStudent
    nume=localStorage.numeStudent
    const addUser = (evt) => {
    
      onAdd({
       
        
      })
    }
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
      <button id="butonDevinoMP" onClick={
          ()=>{
            
              navigate("/devinMP");
          }
      }
      >Devino MP</button>
      </>
    );
};

export default Meniu;