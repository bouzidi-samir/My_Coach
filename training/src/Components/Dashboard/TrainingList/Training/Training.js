import './Training.css'
import React from 'react';
import haltere from './haltere.jpeg';

function Training(props) {

    return (
        <div className='training'>
            <img src={haltere}></img>
                <button type="button" className="btn btn-warning sup">Supprimer</button>
                <p>{props.training.name}</p>
        </div>
    )
}
export default Training;

