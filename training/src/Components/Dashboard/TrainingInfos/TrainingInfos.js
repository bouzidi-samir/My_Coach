import './TrainingInfos.css'
import { useParams } from 'react-router';
import haltere from './haltere.jpeg';
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import React, {useState, useEffect} from 'react';
import Exercice from './Exercice/Exercice';

function TrainingInfos() {

    let {name} = useParams();
    const trainingstate = useSelector((state) => state.trainings); 
    const training = trainingstate.filter((e) => e.name == name);
    const [exercices, setExercices] = useState(training[0].exercices)
    
    return (
        <div className='traininginfos'>
         
                <hr></hr>
            <div className='cont'>
                <div className='general'>
                    <img src={haltere}></img>                    
                    <h1>{name}</h1>
                </div>
                <div className='exercices'>
                    <h2>Exercices</h2>
                    <div className='exercicelist'>
                        {exercices.map( e => 
                        <div className='exelement'>
                            <Exercice key={e.name} exercice={e}/>
                        </div>    
                        )}                   
                    </div>
                </div>
            </div>

        </div>
    )
}
export default TrainingInfos;