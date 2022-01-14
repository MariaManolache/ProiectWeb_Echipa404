
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
// import {BrowserHistory} from 'react-router';
import Login from './Login';
import Meniu from './Meniu';
import SuntMP from './SuntMP';
import AdaugaProiect from './AdaugaProiect';
import ProiectList from './ProiectList';
import DevinTST from './DevinTST';
import SuntTST from './SuntTST';
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
      <Route path="/meniu" element={<Meniu />}/>}
      <Route path="/suntMP" element={<SuntMP />}/> 
      <Route path="/adaugaProiect" element={<AdaugaProiect />}/> 
      <Route path="/proiectList" element={<ProiectList />}/> 
      <Route path="/devinTester" element={<DevinTST />}/> 
      <Route path="/suntTester" element={<SuntTST />}/> 
      {/* <Route path="/suntTester" element={<Tester />}/> 
      <Route path="/devinMP" element={<devinMP />}/> 
      <Route path="/devinTester" element={<devinTester />}/>  */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;