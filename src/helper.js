import react, {Component} from 'react';

class DistrictRepository {
  constructor(data){
    
    this.data = data.reduce((acc, dataPiece)=>{
      if (!acc[dataPiece.Location]) {
        acc[dataPiece.Location]= []
      }
      acc[dataPiece.Location].push(dataPiece)
      return acc
    }, [])

  }
  
}

export default DistrictRepository;
