import React from 'react'
import "./Exercice.css" 
import devCouche from './DévellopéCouché.jpeg'

export default function Exercice(props) {
  return (
    <div className='expart'>
        <div className='vignette'>
            <img src={devCouche}></img>
            <p>{props.exercice.name}</p>
        </div>
    </div>
  )
}

