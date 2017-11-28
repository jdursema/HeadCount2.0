import react, {Component} from 'react';

class DistrictRepository {
  constructor(data){
    
    this.data = this.cleanData(data);
  }
  cleanData(data) {
    // console.log(data)
   let results =  data.reduce((accu, dataPiece) =>{
    
      if(!accu[dataPiece.Location.toUpperCase()]) {
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

    // console.log(results)
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

    findAllMatches(string){
      if(!string){
        return this.data
      }
      let uppercaseString = string.toUpperCase()

      return this.data.filter((dataPiece)=>dataPiece.location.includes(uppercaseString))
    
    }
  
}

export default DistrictRepository;
