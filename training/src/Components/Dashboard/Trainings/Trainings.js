import './Trainings.css'
import Training from '../../../Datas/TrainingList';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import haltere from './haltere.jpeg';

var d = [];

var trainingList = [ 
    new Training ('Pectoraux'),
    new Training ('Jambes')];



function Trainings() {
    const [trainings, setTrainings] = useState(new Array);
    const [addWindow, setaddWindow] = useState(false);

    useEffect( () => {
        setTrainings(trainingList);
    }, []);

    function addTraining() {
        let newtrainings = [...trainings];
        newtrainings.push(new Training("New"));
        setTrainings(newtrainings);
    }

    function clearTraining(n) {
        let newtrainings = [...trainings];
        for (let i = 0; i < newtrainings.length; i++) {
            if (newtrainings[i].name == n)
                delete newtrainings[i];
        }
        setTrainings(newtrainings);
    }

    return (
        <div className='Traincontent'>
            <h1>Mes Trainings</h1>
            <button onClick={addTraining} type="button" className="btn btn-warning add"> + Ajouter</button>
                <div className='list'>
                    {trainings.map(({name, grade}) => (
                        <div className='training' key={name}>
                            <img src={haltere}></img>
                            <button onClick={clearTraining} type="button" className="btn btn-warning sup">Supprimer</button>
                            <p>{name}</p>
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default Trainings;