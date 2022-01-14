import { useState } from 'react'

function ProiectForm (props) {
  const { onAdd } = props
  const [ projectName, setProjectName] = useState('')
  const [teamName, setTeamName] = useState('')
  const [repository, setRepository] = useState('')
  const [membru2, setMembru2] = useState('');
  const [membru3, setMembru3] = useState('');



  const addUser = (evt) => {
    
    onAdd({
      projectName,
      teamName,
      repository,
      membru2,
      membru3
      
    })
  }

  return (
    <div className='user-form'>
      <div className='projectName'>
        <input type='text' placeholder='projectName' onChange={(evt) => setProjectName(evt.target.value)} />
      </div>
      <div className='teamName'>
        <input type="text" placeholder='teamName' onChange={(evt) => setTeamName(evt.target.value)} />
      </div>
      <div className='repository'>
        <input type="text" placeholder='repository' onChange={(evt) => setRepository(evt.target.value)} />
      </div>
      <div className='membru2'>
        <input type="text" placeholder='membru2' onChange={(evt) => setMembru2(evt.target.value)} />
      </div>
      <div className='membru3'>
        <input type="text" placeholder='membru3' onChange={(evt) => setMembru3(evt.target.value)} />
      </div>
      <div className='add'>
        <input type='button' value='Adauga' onClick={addUser} />
      </div>
    </div>
    
  )
}

export default ProiectForm

