import './App.css';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';
import Auth from './Components/Auth';


function App() {
  return (
    <div>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Auth/>}/>
     <Route path='/register' element={<Auth register/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/projects' element={<Projects/>}/>
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
