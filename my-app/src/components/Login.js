 //import UserList from './UserList'
import UserForm from './UserForm'
import UserContext from './UserContext';
import{useNavigate} from "react-router";
const SERVER = 'http://localhost:8000'

function Login () {
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
        <UserContext.Provider value={result.ID}>
        </UserContext.Provider>
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
