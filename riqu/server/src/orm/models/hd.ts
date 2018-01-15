import { Document } from "mongoose";
import { IHd } from "../interfaces/hd";
import { IIcModel } from "./ic";

export interface IHdModel extends IHd, Document {
  //custom methods for your model would be defined here

  // include our IC model, this should be a 1:1 relationship
  ic:IIcModel;
}