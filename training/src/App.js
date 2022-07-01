import './App.css';

import { BrowserRouter} from 'react-router-dom';
import { Route, Routes } from 'react-router';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import TrainingList from './Components/Dashboard/TrainingList/TrainingList';
import TrainingInfos from './Components/Dashboard/TrainingInfos/TrainingInfos';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>    
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/Espace" element={<Dashboard/>} />
          <Route path="/Trainings" element={<TrainingList/>} />
          <Route path="/Trainings/:name" element={<TrainingInfos/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
