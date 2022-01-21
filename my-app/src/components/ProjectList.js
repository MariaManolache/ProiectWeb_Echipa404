import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { FilterMatchMode } from 'primereact/api'

import { Chart } from 'react-google-charts'

import { getProjects } from './Actions'

const SERVER = 'http://localhost:8000';

const projectSelector = state => state.project.projectList
const projectCountSelector = state => state.project.count

function ProjectList () {
  const [isDialogShown, setIsDialogShown] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [repository, setRepository] = useState('')
  const [teamName, setTeamName] = useState('')
  const [firstMember, setFirstMember] = useState('')
  const [secondMember, setSecondMember] = useState('')
  const [thirdMember, setThirdMember] = useState('')
  const [isNewRecord, setIsNewRecord] = useState(true)
  const [selectedBook, setSelectedBook] = useState(null)
  const [filterString, setFilterString] = useState('')

  const [studentID, setStudentID] = useState('')

  const [chartData, setChartData] = useState([])

//   const [sortField, setSortField] = useState('')
//   const [sortOrder, setSortOrder] = useState(1)

  const [page, setPage] = useState(0)
  const [first, setFirst] = useState(0)


//   useEffect(() => {
//     const keys = Object.keys(filters)
//     const computedFilterString = keys.map(e => {
//       return {
//         key: e,
//         value: filters[e].value
//       }
//     }).filter(e => e.value).map(e => `${e.key}=${e.value}`).join('&')
//     setFilterString(computedFilterString)
//   }, [filters])

  const projects = useSelector(projectSelector)


  const count = useSelector(projectCountSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjects(localStorage.idStudent))
  }, [studentID])

  console.log(projects);
  console.log(localStorage.idStudent);

  // fetch(`${SERVER}/students/${localStorage.idStudent}/projects` , {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // }).then(function (response) {
  //   return response.json()
  // }).then((data) => {
  //   projectsTest = data;
  //     console.log(data)
      
     
  // })


  useEffect(() => {
    const data = [['Project name', 'Team name', 'Repository']]

   console.log(typeof(projects))
   if(projects.length>0)
    for (const project of projects) {
      data.push([project.projectName, project.teamName, project.repository])
    }
    setChartData(data)
    console.log(data);
  }, [projects])



  const chartOptions = {
    chart: {
      title: 'Projects',
      subtitle: 'Number of pages'
    }
  }

//   const handleAddClick = (evt) => {
//     setIsDialogShown(true)
//     setIsNewRecord(true)
//     setTitle('')
//     setContent('')
//   }

  const hideDialog = () => {
    setIsDialogShown(false)
  }

//   const handleSaveClick = () => {
//     if (isNewRecord) {
//       dispatch(addProject({ title, content, pageCount }))
//     } else {
//       dispatch(saveBook(selectedBook, { title, content, pageCount }))
//     }
//     setIsDialogShown(false)
//     setSelectedBook(null)
//     setTitle('')
//     setContent('')
//     setPageCount(0)
//   }

//   const editBook = (rowData) => {
//     setSelectedBook(rowData.id)
//     setTitle(rowData.title)
//     setContent(rowData.content)
//     setIsDialogShown(true)
//     setIsNewRecord(false)
//   }

//   const handleDeleteBook = (rowData) => {
//     dispatch(deleteBook(rowData.id))
//   }

//   const tableFooter = (
//     <div>
//       <Button label='Add' icon='pi pi-plus' onClick={handleAddClick} />
//     </div>
//   )

//   const dialogFooter = (
//     <div>
//       <Button label='Save' icon='pi pi-save' onClick={handleSaveClick} />
//     </div>
//   )

//   const opsColumn = (rowData) => {
//     return (
//       <>
//         <Button label='Edit' icon='pi pi-pencil' onClick={() => editBook(rowData)} />
//         <Button label='Delete' icon='pi pi-times' className='p-button p-button-danger' onClick={() => handleDeleteBook(rowData)} />
//       </>
//     )
//   }

  // const handlePageChange = (evt) => {
  //   setPage(evt.page)
  //   setFirst(evt.page * 2)
  // }

//   const handleSort = (evt) => {
//     console.warn(evt)
//     setSortField(evt.sortField)
//     setSortOrder(evt.sortOrder)
//   }

  return (
    <div>
      <Chart
        chartType='Bar'
        width='100%'
        height='400px'
        data={chartData}
        options={chartOptions}
      />
      <DataTable
        value={projects}
        lazy
        paginator
        // first={first}
        rows={2}
        totalRecords={count}
        // onSort={handleSort}
        // sortField={sortField}
        // sortOrder={sortOrder}
      >
        <Column header='Project name' field='project name'/>
        <Column header='Team name' field='team name' />
        <Column header=' Repository ' field='repository'  />
      </DataTable>
      <Dialog header='A project' visible={isDialogShown} onHide={hideDialog} >
        <div>
          <InputText placeholder='project name' onChange={(evt) => setProjectName(evt.target.value)} value={projectName} />
        </div>
        <div>
          <InputText placeholder='team name ' onChange={(evt) => setTeamName(evt.target.value)} value={teamName} />
        </div>
        <div>
          <InputText placeholder='repository' onChange={(evt) => setRepository(evt.target.value)} value={repository} />
        </div>
      </Dialog>
    </div>
  )
}

export default ProjectList
