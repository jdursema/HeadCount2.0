import React from 'react';
import PropTypes from 'prop-types';

const Card = ({location, data}) => {
  const years = Object.keys(data)
  return (
    <div>
      <h2>{location}</h2>
        {
          years.map((year, index) => {
            return (
              <div>
                <p>{year}</p>
                <p>{data[year]}</p>
              </div>
              )
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
