const SERVER = 'http://localhost:8000'

export const getProjects = (studentID) => {
  return {
    type: 'GET_PROJECTS',
    payload: async () => {
      const response = await fetch(`${SERVER}/students/${studentID}/projects`)
      const data = await response.json()

      console.log(studentID);
      console.log(typeof(data));

    //   localStorage.projects = data;
    //   console.log(localStorage.projects);

      return data;
    }
  }
}


// export const saveBook = (id, book, filterString, page, pageSize, sortField, sortOrder) => {
//   return {
//     type: 'SAVE_BOOK',
//     payload: async () => {
//       let response = await fetch(`${SERVER}/books/${id}`, {
//         method: 'put',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(book)
//       })
//       response = await fetch(`${SERVER}/books?${filterString}&sortField=${sortField || ''}&sortOrder=${sortOrder || ''}&page=${page || ''}&pageSize=${pageSize || ''}`)
//       const data = await response.json()
//       return data
//     }
//   }
// }

// export const deleteBook = (id, filterString, page, pageSize, sortField, sortOrder) => {
//   return {
//     type: 'DELETE_BOOK',
//     payload: async () => {
//       let response = await fetch(`${SERVER}/books/${id}`, {
//         method: 'delete'
//       })
//       response = await fetch(`${SERVER}/books?${filterString}&sortField=${sortField || ''}&sortOrder=${sortOrder || ''}&page=${page || ''}&pageSize=${pageSize || ''}`)
//       const data = await response.json()
//       return data
//     }
//   }
// }
