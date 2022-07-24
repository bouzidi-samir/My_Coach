import React from 'react'
import "./Exercice.css" 
import devCouche from './DévellopéCouché.jpeg'

export default function Exercice(props) {
  return (
    <div className='expart'>
        <div className='vignette'>
  
            <img src={props.exercice.exercice.image_exercice}></img>
            <h3>{props.exercice.exercice.nom_exercice}</h3>
        </div>
      <div className='series'>
        <h3>Nombre de series:</h3>
        <p>{props.exercice.serie}</p>
      </div>
  
    </div>
  )
}

