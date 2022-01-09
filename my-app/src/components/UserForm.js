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
    <div className='user-form'>
      <div className='username'>
        <input type='text' placeholder='email' onChange={(evt) => setUsername(evt.target.value)} />
      </div>
      <div className='fullName'>
        <input type="password" placeholder='parola' onChange={(evt) => setFullName(evt.target.value)} />
      </div>
      <div className='add'>
        <input type='button' value='Conecteaza-te' onClick={addUser} />
      </div>
    </div>
    
  )
}

export default UserForm

