import "./ExerciceList.css";
import { useParams } from 'react-router';
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

var List = []; 

function getExercices(data) {
   //console.log(data); 
   List =  data;
} 

function getDatas() {

    const url = "https://bridge.buddyweb.fr/api/pumpitapp/exercices";

    fetch(url).then((response) => 
        response.json().then((data) => (getExercices(List = data)
        )));
}

function ExerciceList(props) {

    let list;
    //getDatas();
    useEffect(() => { 
        
        const url = "https://bridge.buddyweb.fr/api/pumpitapp/exercices";

        fetch(url).then((response) => 
            response.json().then((data) => (getExercices(List = data)
            )));    
    });
    
    let url  = "https://pixabay.com/fr/photos/homme-personne-puissance-force-1282232/";
    return (
        <>
        <h2>Selectionner votre exercice</h2>
        <hr></hr>
        <div className="excontent">
                
            {
               
                List.map(e => ( 
                
                    <div className="exelement">
                        <img src="https://images.app.goo.gl/A1stNkmb4VZ4r3uq8"></img>
                        <p key={e.nom_exercice}> {e.nom_exercice} </p>  
                   </div>
            ))}   
        </div>
        </>
    );
} 

export default ExerciceList;