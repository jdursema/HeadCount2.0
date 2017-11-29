import React from 'react';
import Card from './Card';


const CardContainer = ({schoolData}) => {
     const mappedData =  schoolData.map((data)=>{
        return <Card location = {data.location} data={data.data} />
      });
    
  
  
  return (
    <div>
      {mappedData}
    </div>
  )
}

export default CardContainer;
