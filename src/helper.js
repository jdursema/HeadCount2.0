import react, {Component} from 'react';
import kinderData from '../data/kindergartners_in_full_day_program';


export default class DistrictRepository {
  constructor(){
    
    this.data= kinderData.reduce((acc, dataPiece)=>{
      if (!acc[dataPiece.Location]){
        acc[dataPiece.Location]=[]
      }
      acc[dataPiece.Location].push(dataPiece)
      return acc
    }, [])

  }
  
}
