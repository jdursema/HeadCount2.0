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
        accu[dataPiece.Location.toUpperCase()].data[dataPiece.TimeFrame] =dataPiece.Data
      return accu
    }, {})

    let resultsArray = Object.keys(results).map(location => results[location])

    return resultsArray
  }


  findByName(location) {
    // console.log(this.data)
    if(!location){
      return undefined
    }

    let uppercaseLocation= location.toUpperCase()

    if(location){
      let filteredArray = this.data.find((district) => 
      {
        return district.location===uppercaseLocation})
      
      return filteredArray
    }
    
    }

    findAllMatches(){
      const matchArray = [...this.data]
      console.log(matchArray)
      return matchArray
    }
  
}

export default DistrictRepository;
