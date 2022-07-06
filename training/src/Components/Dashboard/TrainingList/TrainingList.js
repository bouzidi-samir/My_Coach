import './TrainingList.css'
import TrainingClass from '../../../Datas/TrainingClass';
import Training from './Training/Training';
import trainList from '../../../Datas/ListTrain';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, unstable_HistoryRouter} from 'react-router-dom';
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'

function TrainingList() {
    const trainL = useSelector((state) => state.trainings)
    const [addWindow, setaddWindow] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className='Traincontent'>
            <h1>Mes Trainings</h1>
            <button onClick={() => dispatch({
                type: "trainings/addTraining",
                payload: "New"
            })} 
            type="button" className="btn btn-light add"> + Ajouter</button>
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