import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CompareContainer = ({selectedArray, changeClass}) => {
  const mappedSectedCards= selectedArray.map((selectedCard)=>{

    return <Card key={selectedCard.location} 
      location={selectedCard.location} 
      data={selectedCard.data}
      changeClass={changeClass}
      type='card'
    />;
  });

  return (
    <div>
      {mappedSectedCards}
    </div>
  );
};

export default CompareContainer;

CompareContainer.PropTypes = {
  selectedArray: PropTypes.array,
  changeClass: PropTypes.func
};
