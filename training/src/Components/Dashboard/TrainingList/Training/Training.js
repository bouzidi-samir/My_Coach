import './Training.css'
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import haltere from './haltere.jpeg';

function Training(props) {
    
    function clearTraining() {
        let newtrainings = [...props.list];
        let sort = newtrainings.filter((e) => e.name != props.training.name);
        props.setList(sort);
    }

    function gotToTraining() {
        <Link training={props.training}>
            
        </Link>
    }

    return (
        <div className='training'>
            <img src={haltere}></img>
            <Link to={"/Trainings/" + props.training.name }>    
                <button type="button" className="btn btn-secondary btn-sm sup">Modifier</button>
            </Link>
                <button onClick={() => clearTraining()} type="button" className="btn btn-secondary btn-sm sup">Supprimer</button>
                <p>{props.training.name}</p>
        </div>
    )
}
export default Training;

