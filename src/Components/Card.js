import React from 'react'
import PropTypes from 'prop-types'
//import image1 from "../assets1/cerebro.jpg"

export default function Card({id, MyTitle, image1, instructor}) {
  return (

    <div className='card text-center bg-dark'>
      <div className='card-body text-light'>
        <img src={image1} alt="" className='card-img-top'></img>
        <h4 className='card-title'> {MyTitle} </h4>
        <p className='card-text text-secondary'>
          Instructor: {instructor}
        </p>
        <a href='#!' className='btn btn-outline-secondary rounded-3'>
          Ir al sitio Web
        </a>
      </div>
    </div>
  )
}
