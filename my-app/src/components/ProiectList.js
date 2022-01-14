import{useNavigate} from "react-router";
import {useEffect, useState} from 'react'
import Proiect from './Proiect'
import ProiectForm from './ProiectForm'

const SERVER = 'http://localhost:8000'


function ProiectList() {

const [projects, setProjects] = useState([])
const navigate=useNavigate();
    const getMPs = async () => {
        const response = await fetch(`${SERVER}/students/${localStorage.idStudent}/mps`);
        const data = await response.json()
        let projects2 = [];
        let i = 0;
        for(let d of data) {
            let id = d.projectID;
            console.log(id);
            const response1 = await fetch(`${SERVER}/projects/${id}`);
            projects2[i++] = await response1.json().ID;
        }
        //setProjects(projects2);
    }


    const addUser = async () => {
        getMPs();
      }

    useEffect(() => {
        getMPs()
    }, [])

    return (
        <div className='projects-list'> 
        {
            projects.map(e => <Proiect key={e.id} item={e} />)
        }
        {/* <ProiectForm onAdd={addUser} /> */}
              <div>
                  {
                      addUser()
}</div> 
        </div>
    )

}

export default ProiectList;