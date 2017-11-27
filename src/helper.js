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
    findByName(location) {
      if (location) {
         let area = this.data.filter(dataPiece => console.log(dataPiece))
        return area;
      } else {
        return undefined

      }
    }
  
}

export default DistrictRepository;
