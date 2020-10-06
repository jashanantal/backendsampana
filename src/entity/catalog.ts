import * as mongoose from "mongoose";
import dbConnection from '../util/db';


export interface Catalog extends mongoose.Document {
    songName: string;
    album: string;
    artist: string;
    banner:string;
    airtelCode:string;
    mtnCode:string;
    vodaCode:string;
    description:string;
    dates:string;
    airtelDesc:string;
    mtnDesc:string
    vodaDesc:string;
}

const catalogSchema = new mongoose.Schema({
  songName: String,
  album: String,
  artist: String,
  airtelCode:String,
  mtnCode:String,
  vodaCode:String,
  banner:String,
  description:String,
  dates:Date,
  airtelDesc:String,
  mtnDesc:String,
  vodaDesc:String
  });
   
  const catalogModel = mongoose.model<Catalog & mongoose.Document>('Catalog', catalogSchema);  
  export default catalogModel;

  
