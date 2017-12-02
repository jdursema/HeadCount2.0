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
         <tbody>
        {
          years.map((year, index) => {
            if(data[year]>=.5){
              return (
                  <tr className='high' key={index}>
                    <td >{year}: </td>
                    <td >{data[year]}</td>
                  </tr>
                )
            } else {
              return (
                 <tr className='low' key={index}>
                  <td>{year}: </td>
                  <td>{data[year]}</td>
                 </tr>
                )
            }
            
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default Card;

Card.propTypes = {
  location: PropTypes.string,
  data: PropTypes.object,
  onChange: PropTypes.func
}
