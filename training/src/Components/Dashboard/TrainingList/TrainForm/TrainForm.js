import { exercicesList } from "../../../../Datas/Exercices";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, Route, unstable_HistoryRouter} from 'react-router-dom';
import "./TrainForm.css"
import haltere from './haltere.jpeg';

export default function TrainForm() {

    const trainingstate = useSelector((state) => state.trainings); 
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    };

    function handleForm() {
        
        dispatch({
            type: "trainings/addTraining",
            payload: name
        });
    }

    return (
        <div className="Form-Contain">
            <h1>Nouveau training</h1>
            <hr></hr>
            <div className="formT">
                <div className="picture">
                    <img src={haltere}></img>
                </div>
                <form>
                    <label for="trainingName">Nom du Programme:</label>
                    <br></br>
                    <input name="trainingName" id="trainingName" value={name} onChange={handleChange}></input>
                    <br></br>
                    <label id="trainingTime">Durée du Programme:</label>
                    <br></br>
                    <input name="trainingTime" id="trainingTime"></input>
                    <br></br>
                    <Link to={"/Trainings"}>
                        <button onClick={handleForm} className="btn btn-primary">Enregistrer</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}