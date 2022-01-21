import { useState } from 'react'
import './UserForm.css'






function UserForm (props) {
  const { onAdd } = props
  const [email, setUsername] = useState('')
  const [parola, setFullName] = useState('')




  const addUser = (evt) => {
    
    onAdd({
      email,
      parola,
      
    })
  }

  return (
    <div className='container'>

    
        <input type='text' placeholder='email' onChange={(evt) => setUsername(evt.target.value)} />
      
       
        <input type="password" placeholder='parola' onChange={(evt) => setFullName(evt.target.value)} />
      
     
        <input type='button' value='Conecteaza-te' onClick={addUser}></input>
        
        
        
      </div>
 
    
  )
}

export default UserForm

