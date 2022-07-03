import './TrainingList.css'
import TrainingClass from '../../../Datas/TrainingClass';
import Training from './Training/Training';
import trainList from '../../../Datas/ListTrain';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, unstable_HistoryRouter} from 'react-router-dom';


var d = [];

function TrainingList() {
    const [trainings, setTrainings] = useState(new Array);
    const [addWindow, setaddWindow] = useState(false);

    useEffect( () => {
        setTrainings(trainList);
    }, []);

    function addTraining() {
        let newtrainings = [...trainings];
        newtrainings.push(new TrainingClass("New" + newtrainings.length));
        setTrainings(newtrainings);
    }

    return (
        <div className='Traincontent'>
            <h1>Mes Trainings</h1>
            <button onClick={addTraining} type="button" className="btn btn-warning add"> + Ajouter</button>
            <hr></hr>
                <div className='list'>
                    {trainings.map(training => (
                        <Training key={training.name} training={training} list={trainings} setList={setTrainings}/>         
                    ))}
                </div>
        </div>
    );
}

export default TrainingList;