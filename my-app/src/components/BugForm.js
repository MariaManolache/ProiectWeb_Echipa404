import { useState } from 'react'

function BugForm (props) {
  const { onAdd } = props
  const [ commit, setCommit] = useState('')
  const [ status, setStatus] = useState('')
  const [ severity, setSeverity] = useState('')
  const [ priority, setPriority] = useState('');
  const [ description, setDescription] = useState('');



  const addUser = (evt) => {
    
    onAdd({
      commit,  
      status,
      severity,
      priority,
      description
      
    })
  }

  return (
    <div className='user-form'>
      <div className='commit'>
        <input type='text' placeholder='commit' onChange={(evt) => setCommit(evt.target.value)} />
      </div>
      <div className='status'>
        <input type="text" placeholder='status' onChange={(evt) => setStatus(evt.target.value)} />
      </div>
      <div className='severity'>
        <input type="text" placeholder='severity' onChange={(evt) => setSeverity(evt.target.value)} />
      </div>
      <div className='priority'>
        <input type="text" placeholder='priority' onChange={(evt) => setPriority(evt.target.value)} />
      </div>
      <div className='description'>
        <input type="text" placeholder='description' onChange={(evt) => setDescription(evt.target.value)} />
      </div>
      <div className='add'>
        <input type='button' value='Adauga' onClick={addUser} />
      </div>
    </div>
    
  )
}

export default BugForm

