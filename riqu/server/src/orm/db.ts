import { ConnectDatabase } from './connection';

//models
import { IModel } from "./models"; 
import { IHdModel } from "./models/hd"; 
import { IIcModel } from "./models/ic"; 

// schemas
import { hdSchema } from "./schemas/hd"; 
import { icSchema } from "./schemas/ic"; 

const conn = ConnectDatabase();
 
// create models
const hd = conn.model<IHdModel>("hd", hdSchema, "hd2016");
const ic = conn.model<IIcModel>("ic", icSchema, "ic2016_ay");

export let Hd = hd, Ic = ic;