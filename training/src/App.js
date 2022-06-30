import './App.css';

import { BrowserRouter} from 'react-router-dom';
import { Route, Routes } from 'react-router';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Trainings from './Components/Dashboard/Trainings/Trainings';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>    
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/Espace" element={<Dashboard/>} />
          <Route path="/Trainings" element={<Trainings/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
