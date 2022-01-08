
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
// import {BrowserHistory} from 'react-router';
import Login from './Login';
import Meniu from './Meniu';
// import Tasks from "./components/Tasks"
// import NotFound from "./components/NotFound"
// import About from "./components/About"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      {/* <Route path="/tasks" element={<Tasks />}/>
      <Route path="/tasks/:id" element={<Tasks />}/>
      <Route path="*" element={<NotFound />}/>}*/
      <Route path="/meniu" element={<Meniu />}/> }
    </Routes>
    </BrowserRouter>
  );
}

export default App;