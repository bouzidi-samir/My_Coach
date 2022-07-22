import './App.css';

import { BrowserRouter} from 'react-router-dom';
import { Route, Routes, useParams } from 'react-router';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import TrainingList from './Components/Dashboard/TrainingList/TrainingList';
import TrainingInfos from './Components/Dashboard/TrainingInfos/TrainingInfos';
import TrainForm from './Components/Dashboard/TrainingList/TrainForm/TrainForm';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import {store} from "./redux";
import ExerciceList from './Components/Dashboard/ExerciceList/ExerciceList'
import ExerciceInfo from './Components/Dashboard/ExerciceList/ExerciceInfo/ExerciceInfo';

var List = []; 

function getExercices(data) {
   //console.log(data); 
   List =  data;
} 

function getDatas() {

    const url = "https://bridge.buddyweb.fr/api/pumpitapp/exercices";

    fetch(url).then((response) => 
        response.json().then((data) => (getExercices(List = [...data])
        )));
}

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
            <Route path="/Exercices" element={<ExerciceList/>} />
            <Route path="/Trainings/:name" element={<TrainingInfos/>} />
            <Route path="/Exercices/:id" element={<ExerciceInfo/>} />
            <Route path="/Trainings/Ajout" element={<TrainForm/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
