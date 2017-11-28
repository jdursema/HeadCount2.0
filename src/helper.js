import react, {Component} from 'react';

class DistrictRepository {
  constructor(data){
    
    this.data = this.cleanData(data);
    


  }
  cleanData(data) {
   return data.reduce((accu, dataPiece) =>{
      if(!accu[dataPiece.Location]) {
        accu[dataPiece.Location] = {
          location: dataPiece.Location,
          data: {}
        }
        
      }
        accu[dataPiece.Location].data[dataPiece.TimeFrame] =dataPiece.Data
      // console.log(accu)
      return accu
    }, {})
  }


    findByName(location) {
       
    }
  
}

export default DistrictRepository;
