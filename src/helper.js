import react, {Component} from 'react';

class DistrictRepository {
  constructor(data){
    
    this.data = this.cleanData(data);
  }
  cleanData(data) {
    
   let results =  data.reduce((accu, dataPiece) =>{
    let upperCaseLocation = dataPiece.Location.toUpperCase();
    let upperCaseKeys = dataPiece.Location.toUpperCase();
    let dataTime = dataPiece.TimeFrame;

      if(!accu[upperCaseLocation]) {
        accu[upperCaseLocation] = {
          location: upperCaseLocation,
          data: {}
        }
        
      }

      if(dataPiece.Data=== 'N/A'){
        accu[upperCaseKeys].data[dataTime] =0
      }else{
        accu[upperCaseKeys].data[dataTime] = 
        (Math.round(dataPiece.Data*1000))/1000
      }

        

      return accu
    }, {})

    let resultsArray = Object.keys(results).map(location => results[location])

    return resultsArray
  }


  findByName(location) {
    if(!location){
      return undefined
    }

    let uppercaseLocation= location.toUpperCase()

    if(location){
      return this.data.find((district) => district.location === uppercaseLocation)
      
    }
    
    }

    findAllMatches(string){
      if(!string){
        return this.data
      }
      let uppercaseString = string.toUpperCase()

      return this.data.filter((dataPiece)=>dataPiece.location.includes(uppercaseString))
    
    }
  
}

export default DistrictRepository;
