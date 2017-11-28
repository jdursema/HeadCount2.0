import react, {Component} from 'react';

class DistrictRepository {
  constructor(data){
    
    this.data = this.cleanData(data);
  }
  cleanData(data) {
  
   let results =  data.reduce((accu, dataPiece) =>{
      if(!accu[dataPiece.Location]) {
        accu[dataPiece.Location.toUpperCase()] = {
          location: dataPiece.Location.toUpperCase(),
          data: {}
        }
        
      }

      if(dataPiece.Data=== 'N/A'){
        accu[dataPiece.Location.toUpperCase()].data[dataPiece.TimeFrame] =0
      }else{
        accu[dataPiece.Location.toUpperCase()].data[dataPiece.TimeFrame] = 
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
      return this.data.find((district) => 
district.location === uppercaseLocation)
      
    }
    
    }

    findAllMatches(){
      const matchArray = [...this.data]
      console.log(matchArray)
      return matchArray
    }
  
}

export default DistrictRepository;
