import {
    GraphQLList
  } from 'graphql'
  
import HdType from "../models/hd";
import { Hd } from '../../orm/db';
    
export default {
    type: new GraphQLList(HdType),
    resolve(){
        const data = Hd.find().exec();

        if (!data){
            throw new Error("error while fetching data..")
        }

        return data;
    }
}