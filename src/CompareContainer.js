import React from 'react';
import Card from './Card';

const CompareContainer = ({selectedArray, changeClass, compareCard}) => {
  const mappedSectedCards= selectedArray.map((selectedCard)=>{
    return <Card key={selectedCard.location} 
                     location={selectedCard.location} 
                     data={selectedCard.data}
                     changeClass={changeClass}
                     type = 'card'
                     />
  });
  let comparisonData;
  let keys;
  let mappedCompared;

  if (mappedSectedCards.length === 2) {
    comparisonData= compareCard(selectedArray[0].location, selectedArray[1].location) 
    keys= Object.keys(comparisonData)
    mappedCompared= keys.map((key)=>{
      return(
        <div>
          <h3>{key}</h3>
          <h4>{comparisonData[key]}</h4>
          <h5>{comparisonData.compared}</h5>
        </div> 
      )
    })
  }


  
  
  return(
    <div>
      {
        mappedSectedCards[0] &&
        mappedSectedCards[0]
      }
      {mappedCompared}
      {
        mappedSectedCards[1] &&
        mappedSectedCards[1]
      }
    </div>
  )
}

export default CompareContainer;
