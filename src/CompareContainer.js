/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import Card from './Card';
import PropTypes from 'prop-types';
import './style/CompareContainer.css';

const CompareContainer = ({selectedArray, changeClass, compareCard}) => {
  const mappedSectedCards= selectedArray.map((selectedCard)=>{

    return <Card key={selectedCard.location} 
      location={selectedCard.location} 
      data={selectedCard.data}
      changeClass={changeClass}
      type = 'card'
    />;
  });

  let comparisonData;
  let keys;
  let mappedCompared;

  if (mappedSectedCards.length === 2) {
    comparisonData= compareCard(selectedArray[0].location, selectedArray[1].location); 
    keys= Object.keys(comparisonData);
    mappedCompared= keys.map((key, index)=>{
      return <h3 key={index}>{key}: {comparisonData[key]}</h3> ;
    });
  }

  return(
    <div className='compared-cards-section'>
      {
        mappedSectedCards[0]
      }
      
      <div className='card'>
        {mappedCompared}
      </div>
      
      {
        mappedSectedCards[1]
      }
    </div>
  );
};

export default CompareContainer;

CompareContainer.PropTypes = {
  selectedArray: PropTypes.array,
  changeClass: PropTypes.func,
  compareCard: PropTypes.func
};
