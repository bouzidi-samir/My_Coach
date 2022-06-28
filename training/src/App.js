import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Routes>    
          <Route exact path={"/"} element={<Navbar/>}/>
      </Routes>
    </div>
  );
}

export default App;
