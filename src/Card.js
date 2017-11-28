import React from 'react';

const Card = ({location, data}) => {
  const years = Object.keys(data)
  return (
    <div>
      <h2>{location}</h2>
        {
          years.map(year => {
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