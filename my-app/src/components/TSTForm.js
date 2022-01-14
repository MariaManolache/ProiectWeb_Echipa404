import { useState } from 'react'

function TSTForm (props) {
  const { onAdd } = props
  const [ repository, setRepository] = useState('')



  const addUser = (evt) => {
    
    onAdd({
      repository
      
    })
  }

  return (
    <div className='tester-form'>
      <div className='repository'>
        <input type="text" placeholder='repository' onChange={(evt) => setRepository(evt.target.value)} />
      </div>
      <div className='add'>
        <input type='button' value='Adauga' onClick={addUser} />
      </div>
    </div>
    
  )
}

export default TSTForm;

