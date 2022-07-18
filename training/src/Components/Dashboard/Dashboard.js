import './Dashboard.css'
import TrainingList from './TrainingList/TrainingList';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import womenbar from './womenbar.jpeg';
import nutrition from '../../img/nutrition.jpeg'
import {Provider} from 'react-redux'
import {store} from '../../redux.js'
import iconeHalt from './haltericone.png'
import prog from './plan.png'

function Dashboard() {

    return (
        <div className='content'>
       
                <div className='base'>
                    <div className='Programmes'>
                        <Link to={'/Trainings'}>
                    <img className='icone' src={prog}></img>
                    <h2>Programmes</h2> 

                        </Link>
                    </div>
                    <div className='Infos'>
                        <Link to={'/Exercices'}>
                        <img className='icone' src={iconeHalt}></img>
                    <h2>Exercices</h2> 
                                          
                      
                        </Link>
                    </div>
                </div>
        </div>
    );
};

export default Dashboard;
