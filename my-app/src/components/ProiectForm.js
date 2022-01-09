import { useState } from 'react'

function ProiectForm (props) {
  const { onAdd } = props
  const [ projectName, setProjectName] = useState('')
  const [teamName, setTeamName] = useState('')
  const [repository, setRepository] = useState('')




  const addUser = (evt) => {
    
    onAdd({
      projectName,
      teamName,
      repository
      
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
      <div className='add'>
        <input type='button' value='Adauga' onClick={addUser} />
      </div>
    </div>
    
  )
}

export default ProiectForm

