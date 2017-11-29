import React from 'react';
import './style/Card.css'

const Card = ({location, data}) => {
  const years = Object.keys(data)
  return (
    <div className='card'>
      <h2>{location}</h2>
        {
          years.map(year => {
            if(data[year]>=.5){
              return (
                  <p className='high'>{year} {data[year]}</p>
                )
            } else {
              return (
                  <p className='low'>{year} {data[year]}</p>
                )
            }
            
          })
        }
    </div>
  )
}

export default Card;
