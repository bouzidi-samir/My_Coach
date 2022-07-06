import './Training.css'
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import haltere from './haltere.jpeg';
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'

function Training(props) {
    const trainList = useSelector((state) => state.trainings)
    const dispatch = useDispatch();

    function clearTraining() {
        let sort = trainList.filter((e) => e.name != props.training.name);
        trainList = sort;
    }

    return (
        <div className='training'>
            <img src={haltere}></img>
            <Link to={"/Trainings/" + props.training.name }>    
                <button type="button" className="btn btn-primary btn-lg sup">Modifier</button>
            </Link>
                <button onClick={() => dispatch({
                type: "trainings/deleteTraining",
                payload:props.training.name
            })} type="button" className="btn btn-danger btn-lg sup">Supprimer</button>
                <h2>{props.training.name}</h2>
        </div>
    )
}
export default Training;

