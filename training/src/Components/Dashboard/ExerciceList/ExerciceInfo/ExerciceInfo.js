import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
import './ExerciceInfo.css'

export default function ExerciceInfo() {

    const [exercice, setExercice] = useState({});
    const [formadd, setFormadd] = useState(false);
    const {id} = useParams();
    const trainL = useSelector((state) => state.trainings);
   
    useEffect( () => {
    
        let url = "https://bridge.buddyweb.fr/api/pumpitapp/exercices/" + id;
        fetch(url).then((response) => {
            response.json()
            .then((data) => {
            setExercice(data);
        })})

    }, []);

    function displayFormadd () {

        setFormadd(true);
        console.log(trainL);

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
                    <button onClick={displayFormadd} className='btn btn-primary'>Ajouter à un training</button>
                </div>
                {formadd ?
                    
                    <form className='formad'>
                        <label>Selectionne ton training:</label>
                        <br></br>
                        <select>
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
                            <button className='btn btn-primary'>Ajouter</button>
                    </form>
                : null}
            </div>



        </div>
  )
}
