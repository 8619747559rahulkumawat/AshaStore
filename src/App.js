import logo from './logo.svg';
import './App.css';
import Home from './Com/Webpage/Home/Home';
// import Header from './Com/Webpage/Header/Herader'
import { Routes, Route } from 'react-router-dom';
import Men from './Com/Webpage/Men/Men'
import Women from './Com/Webpage/Women/Women'
import Admin from './Com/Adminpanal/Admin'
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
   
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/Men' element={<Men/>}/>
      <Route path='/Women' element={<Women/>}/>
      <Route path='/Admin' element={<Admin/>}/>


     </Routes>
    </div>
  );
}

export default App;
