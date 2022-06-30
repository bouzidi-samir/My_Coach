import './TrainingList.css'
import TrainingClass from '../../../Datas/TrainingClass';
import Training from './Training/Training';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

var d = [];

var trainList = [ 
    new TrainingClass ('Pectoraux'),
    new TrainingClass ('Jambes')];



function TrainingList() {
    const [trainings, setTrainings] = useState(new Array);
    const [addWindow, setaddWindow] = useState(false);

    useEffect( () => {
        setTrainings(trainList);
    }, []);

    function addTraining() {
        let newtrainings = [...trainings];
        newtrainings.push(new TrainingClass("New"));
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
                    {trainings.map(training => (
                        <Training key={training.name} training={training} />         
                    ))}
                </div>
        </div>
    );
}

export default TrainingList;