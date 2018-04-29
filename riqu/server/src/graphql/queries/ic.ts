import {
    GraphQLList
  } from 'graphql'
  
import IcType from "../models/ic";
import { Ic } from '../../orm/db';
    
export default {
    type: new GraphQLList(IcType),
    resolve() {
        const data = Ic.find().exec();
        if (!data){
            throw new Error("error while fetching data..")
        }
        return data;
    }
}