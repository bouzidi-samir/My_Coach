import React, {useState, useEffect} from 'react'
import TrainingClass from '../../../../Datas/TrainingClass';
import { useParams } from 'react-router';
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
import './ExerciceInfo.css'
import { Link } from 'react-router-dom';

export default function ExerciceInfo() {

    const [exercice, setExercice] = useState({});
    const [formadd, setFormadd] = useState(false);
    const [selected, setSelected] = useState("ll");
    const {id} = useParams();
    const trainL = useSelector((state) => state.trainings);
    const trainingstate = useSelector((state) => state.trainings); 
    const dispatch = useDispatch();
   
    useEffect( () => {
    
        let url = "https://bridge.buddyweb.fr/api/pumpitapp/exercices/" + id;
        fetch(url).then((response) => {
            response.json()
            .then((data) => {
            setExercice(data);
        })})

    }, []);

    function handleSelected(event) {

        setSelected(event.target.value);
    }

    function submitForm(event) {

        const training = trainL.filter( (e) => e.name == selected);
        training[0].exercices.push(exercice);
    }

    return (
        <div>
            <div className='exinfocontent'>

                <div className='exinfos'>
                    <img src={exercice.image_exercice}></img>
                    <h2>{exercice.nom_exercice}</h2>
                </div>

                <div className='description'>
                    <h2>Description:</h2>
                    <hr></hr>
                    <p>{exercice.description_exercice}</p>
                    <button onClick={() => setFormadd(true)} className='btn btn-primary'>Ajouter à un training</button>
                </div>
                {formadd ?
                    
                    <form className='formad'>
                        <label>Selectionne ton training:</label>
                        <br></br>
                        <select value={selected} onChange={handleSelected}>
                            <option value="">--Mes Trainings--</option>
                            {
                            trainL.map(training => {
                                return(
                                <option key={training.name} value={training.name}>{training.name}</option>
                                )
                            }
                            )}

                        </select>
                            <br></br>
                            <Link to="/Trainings">
                            <button onClick={(event)=> submitForm(event)} className='btn btn-primary'>Ajouter</button>
                            </Link>
                    </form>
                : null}
            </div>



        </div>
  )
}
