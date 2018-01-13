import { Model } from "mongoose";
import { IHdModel } from "./models/hd";

export interface IModel {
  hd: Model<IHdModel>;
}