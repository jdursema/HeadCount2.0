import React from 'react';
import Card from './Card';


const CardContainer = ({schoolData}) => {
  
  
  return (
    <div>
      {schoolData.map((data)=>{
        return <Card location = {data.location} data={data.data} />
      })
    }
    </div>
  )
}

export default CardContainer;
