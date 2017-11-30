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
                  <tr className='high'>
                    <td >{year}: </td>
                    <td >{data[year]}</td>
                  </tr>
                )
            } else {
              return (
                 <tr className='low'>
                  <td>{year}: </td>
                  <td>{data[year]}</td>
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
