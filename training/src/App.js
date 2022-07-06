import './App.css';

import { BrowserRouter} from 'react-router-dom';
import { Route, Routes, useParams } from 'react-router';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import TrainingList from './Components/Dashboard/TrainingList/TrainingList';
import TrainingInfos from './Components/Dashboard/TrainingInfos/TrainingInfos';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import {store} from "./redux"

function App() {
  return (
    //Provider indque que j'utilise un state-manager.
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
