import "./ExerciceList.css";
import { useParams } from 'react-router';
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function ExerciceList(props) {

    const [list, setList] = useState([]);

    useEffect(() => { 
        
        const url = "https://bridge.buddyweb.fr/api/pumpitapp/exercices";

        fetch(url).then((response) => 
            response.json()
            .then((data) => {
                data[0].image_exercice = "data:image/jpeg;base64,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"
                setList(data);
            }));    
    
    }, []);
    
    let url  = "https://pixabay.com/fr/photos/homme-personne-puissance-force-1282232/";
    return (
        <>
        <h2>Selectionner votre exercice</h2>
        <hr></hr>
        <div className="excontent">
                
            {               
                list.map(e => ( 
                
                    <div className="exelement">
                    <Link to={"/Exercices/" + e.id_exercice}>
                        <img src={e.image_exercice}></img>
                        <p key={e.nom_exercice}> {e.nom_exercice} </p>  
                    </Link>
                   </div>
            ))}   
        </div>
        </>
    );
} 

export default ExerciceList;