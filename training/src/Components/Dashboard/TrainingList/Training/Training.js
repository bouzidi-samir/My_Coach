import './Training.css'
import React, { useEffect } from 'react';
import haltere from './haltere.jpeg';

function Training(props) {
    
    function clearTraining() {
        let newtrainings = [...props.list];
        let sort = newtrainings.filter((e) => e.name != props.training.name);
        props.setList(sort);
    }

    return (
        <div className='training'>
            <img src={haltere}></img>
                <button onClick={() => clearTraining()} type="button" className="btn btn-secondary btn-sm sup">Modifier</button>
                <button onClick={() => clearTraining()} type="button" className="btn btn-secondary btn-sm sup">Supprimer</button>
                <p>{props.training.name}</p>
        </div>
    )
}
export default Training;

