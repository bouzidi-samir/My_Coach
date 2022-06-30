import './Dashboard.css'
import TrainingList from './TrainingList/TrainingList';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import womenbar from './womenbar.jpeg';
import nutrition from '../../img/nutrition.jpeg'

function Dashboard() {

    return (
        <div className='content'>
            <h1>Bienvenue Champion!</h1>
                <div className='base'>
                    <div className='Programmes'> 
                        <Link to={'/Trainings'}>
                            <img src={womenbar}></img>                 
                            <h2>Trainings</h2>
                        </Link>
                    </div>
                    <div className='Infos'>
                        <Link to={'/'}>
                            <img src={nutrition}></img>                 
                            <h2>Nutition</h2>
                        </Link>
                    </div>
                </div>
        </div>
    );
};

export default Dashboard;
