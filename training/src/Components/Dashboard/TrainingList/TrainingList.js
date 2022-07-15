import './TrainingList.css'
import TrainingClass from '../../../Datas/TrainingClass';
import Training from './Training/Training';
import TrainForm from './TrainForm/TrainForm';
import trainList from '../../../Datas/ListTrain';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, Route, unstable_HistoryRouter} from 'react-router-dom';
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
import {getDatas, getExercices} from '../../../Datas/Exercices'

function TrainingList() {
    const trainL = useSelector((state) => state.trainings)
    const [displayForm, setdisplayForm] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className='Traincontent'>
            <h1>Mes Trainings</h1>
            <Link to={"/Trainings/Ajout"}>
                <button type="button" className="btn btn-light add"> + Ajouter</button>
            </Link>
            <hr></hr>
                <div className='list'>
                    {trainL.map(training => (
                    <Training key={training.name} training={training}/>         
                    ))}
                </div>
        </div>
    );
}

export default TrainingList;