import { Document } from "mongoose";
import { IIc } from "../interfaces/ic";

export interface IIcModel extends IIc, Document {
  //custom methods for your model would be defined here
}