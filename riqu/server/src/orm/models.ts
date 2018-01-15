import { Model } from "mongoose";
import { IHdModel } from "./models/hd";
import { IIcModel } from "./models/ic";

export interface IModel {
  hd: Model<IHdModel>;
  ic: Model<IIcModel>;
}