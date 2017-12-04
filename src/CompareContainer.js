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
    mappedCompared=
      <div className= 'compare-card'>
        <h3 className='location-1 average'> {keys[0]}: </h3>
        <h3 className= 'location-1 value'>{comparisonData[keys[0]]}</h3>
        <h1 className='comparison'>{comparisonData[keys[2]]}</h1>
        <h3 className='location-2 average'>{keys[1]}: </h3>
        <h3 className='location-2 value'>{comparisonData[keys[1]]}</h3>
      </div>;

  }

  return ( 
   <div className="compareContainer-header">
     Select Two Schools to Compare
      <div className='compared-cards-section'>

      {
        mappedSectedCards[0]
      }
      
      <div>
        {mappedCompared}
      </div>
      
      {
        mappedSectedCards[1]
      }
      </div>
    </div>
  );
};

export default CompareContainer;

CompareContainer.PropTypes = {
  selectedArray: PropTypes.array,
  changeClass: PropTypes.func,
  compareCard: PropTypes.func
};
