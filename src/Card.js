import React from 'react';
import './style/Card.css'
import PropTypes from 'prop-types';

const Card = ({location, data, changeClass}) => {
  const years = Object.keys(data)
  return (
    <div className='card'
         onClick={() => changeClass(location)} >
      <h2>{location}</h2>
        {
          years.map((year, index) => {
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

Card.propTypes = {
  location: PropTypes.string,
  data: PropTypes.object
}
