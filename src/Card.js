import React from 'react';
import './style/Card.css'
import PropTypes from 'prop-types';

const Card = ({location, data, changeClass, type}) => {
  const years = Object.keys(data)
  return (
    <div className={type}
         onClick={() => changeClass(location)} >
      <h3>{location}</h3>
        <table>
        {
          years.map((year, index) => {
            if(data[year]>=.5){
              return (
                  <tr>
                  <td className='high'>{year}: {data[year]}</td>
                  </tr>
                )
            } else {
              return (
                 <tr>
                  <td className='low'>{year}: {data[year]}</td>
                 </tr>
                )
            }
            
          })
        }
      </table>
    </div>
  )
}

export default Card;

Card.propTypes = {
  location: PropTypes.string,
  data: PropTypes.object
}
