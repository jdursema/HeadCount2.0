import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './style/CardContainer.css'


const CardContainer = ({schoolData, changeClass, selectedCards}) => {
     const mappedData =  schoolData.map((data)=>{
       let type
       if(selectedCards.length && (data.location === selectedCards[0].location)){
         type = 'card selected'
       } else if (selectedCards.length > 1 && (data.location === selectedCards[1].location)){
        type = 'card selected'
      }else{
         type = 'card'
       }
        return <Card key={data.location} 
                     location={data.location} 
                     data={data.data}
                     changeClass={changeClass}
                     type = {type} 
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
