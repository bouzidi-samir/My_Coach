import React from 'react'
import "./Exercice.css" 
import devCouche from './DévellopéCouché.jpeg'

export default function Exercice(props) {
  return (
    <div className='expart'>
        <div className='vignette'>
            <img src={props.exercice.image_exercice}></img>
            <h3>{props.exercice.nom_exercice}</h3>
        </div>
    </div>
  )
}

