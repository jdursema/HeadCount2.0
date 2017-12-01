class DistrictRepository {
  constructor(data){
    
    this.data = this.cleanData(data);
  }
  cleanData(data) {
    
    let results =  data.reduce((accu, dataPiece) => {
      let upperCaseLocation = dataPiece.Location.toUpperCase();
      let upperCaseKeys = dataPiece.Location.toUpperCase();
      let dataTime = dataPiece.TimeFrame;

      if(!accu[upperCaseLocation]) {
        accu[upperCaseLocation] = {
          location: upperCaseLocation,
          data: {}
        }; 
      }

      if(dataPiece.Data=== 'N/A'|| dataPiece.Data==='#DIV/0!') {
        accu[upperCaseKeys].data[dataTime] = 0;
      } else {
        accu[upperCaseKeys].data[dataTime] = (Math.round(dataPiece.Data*1000))/1000;
      }

      return accu;

    }, {});

    let resultsArray = Object.keys(results).map(location => results[location]);

    return resultsArray;
  }


  findByName(location) {
    if(!location){
      return undefined;
    }

    let uppercaseLocation= location.toUpperCase();

    if(location) {
      return this.data.find((district) => district.location === uppercaseLocation);
    }
  }

  findAllMatches(string) {
    if(!string) {
      return this.data;
    }

    let uppercaseString = string.toUpperCase();

    return this.data.filter((dataPiece)=>dataPiece.location.includes(uppercaseString));
    
  }

  findAverage(string){
    let filteredData= this.data.filter((dataObj)=>{
      return (dataObj.location === string);
    });
    let yearKeys =Object.keys(filteredData[0].data);

    let average = yearKeys.reduce((acc, year)=>{
      acc += (filteredData[0].data[year])/11;

      return acc;
       
    },0);

    let roundedAverage =(Math.round(average*1000))/1000;

    return roundedAverage;
  
  }

  compareDistrictAverages(location1, location2) {
    location1 = location1.toUpperCase();
    location2 = location2.toUpperCase();
    const location1Average = this.findAverage(location1);
    const location2Average = this.findAverage(location2);
    const comparedAverage = (Math.round(location1Average / location2Average*1000)) / 1000;

    return {[location1]: location1Average, [location2]: location2Average, 'compared': comparedAverage};
  }

  
}

export default DistrictRepository;
