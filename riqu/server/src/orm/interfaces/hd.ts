import * as Mongoose from "mongoose";

export interface IHd {
  UNITID: Mongoose.Schema.Types.Number,
  INSTNM: Mongoose.Schema.Types.String, 
  IALIAS: Mongoose.Schema.Types.String,
  ADDR: Mongoose.Schema.Types.String,
  CITY: Mongoose.Schema.Types.String,
  STABBR: Mongoose.Schema.Types.String, 
  ZIP:  Mongoose.Schema.Types.String,
  LATITUDE: Mongoose.Schema.Types.String,
  LONGITUD: Mongoose.Schema.Types.String, 
  CreatedAt: Mongoose.Schema.Types.Date
} 