import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';


const CardContainer = ({schoolData}) => {
     const mappedData =  schoolData.map((data)=>{
        return <Card key={data.location} 
                     location={data.location} 
                     data={data.data} 
               />
      });

  return (
    <div>
      {mappedData}
    </div>
  )
}

export default CardContainer;

CardContainer.propTypes = {
  schoolData: PropTypes.array
}
