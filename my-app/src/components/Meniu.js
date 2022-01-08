import{useNavigate} from "react-router";
import UserContext from './UserContext';
import React, { useContext } from 'react';

const Meniu=()=>{
    const navigate=useNavigate();
    const user = useContext(UserContext);

    return(
      <>
       <div >
      Welcome, {user}
    </div>

      <p>
          Meniu
      </p>
      <button onClick={
          ()=>{
              navigate("/aidevenittester");
          }
      }
      >Devino tester</button>
      </>
    );
};

export default Meniu;