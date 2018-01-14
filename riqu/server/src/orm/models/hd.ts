import { Document } from "mongoose";
import { IHd } from "../interfaces/hd";

export interface IHdModel extends IHd, Document {
  //custom methods for your model would be defined here
}