import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './style/CardContainer.css'


const CardContainer = ({schoolData, changeClass}) => {
     const mappedData =  schoolData.map((data)=>{
        return <Card key={data.location} 
                     location={data.location} 
                     data={data.data}
                     changeClass={changeClass} 
               />
      });

  return (
    <div className='card-container'>
      {mappedData}
    </div>
  )
}

export default CardContainer;

CardContainer.propTypes = {
  schoolData: PropTypes.array
}
