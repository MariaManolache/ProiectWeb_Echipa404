const INITIAL_STATE = {
    projectList: [],
    count: 0,
    error: null,
    fetching: false,
    fetched: false
  }
  
  export default function reducer (state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'GET_PROJECTS_PENDING':
        return { ...state, error: null, fetching: true, fetched: false }
      case 'GET_PROJECTS_FULFILLED':
        return { ...state, projectList: action.payload.records, count: action.payload.count, error: null, fetching: false, fetched: true }
      case 'GET_PROJECTS_REJECTED':
        return { ...state, projectList: [], error: action.payload, fetching: false, fetched: true }
      default:
        return state
    }
  }
  