import React from 'react';
import Card from './Card';
import './style/CardContainer.css'


const CardContainer = ({schoolData}) => {
     const mappedData = schoolData.map((data)=>{
        return <Card location={data.location} data={data.data} />
      });
    
  
  
  return (
    <div className='card-container'>
      {mappedData}
    </div>
  )
}

export default CardContainer;
