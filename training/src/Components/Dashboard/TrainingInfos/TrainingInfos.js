import './TrainingInfos.css'
import React from 'react';
import { useParams } from 'react-router';
import haltere from './haltere.jpeg';


function TrainingInfos() {

    let {name} = useParams();

    return (
        <div className='traininginfos'>
                <h1>{name} </h1>
                <hr></hr>
            <div className='cont'>
                <div className='general'>
                    <img src={haltere}></img>                    
                </div>
                <div className='exercices'>
                    <h2>Exercices</h2>
                </div>
            </div>

        </div>
    )
}
export default TrainingInfos;