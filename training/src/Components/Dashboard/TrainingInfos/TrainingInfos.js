import './TrainingInfos.css'
import React from 'react';
import haltere from './haltere.jpeg';


function TrainingInfos(props) {


    return (
        <div className='training'>
            <h1>{props.training.name}</h1>
        </div>
    )
}
export default TrainingInfos;