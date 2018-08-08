import {
    GraphQLList,
    GraphQLFieldConfig,
    GraphQLInputType,
    GraphQLScalarType,
    GraphQLString,
    GraphQLInt
  } from 'graphql'
  
import IcType from "../models/ic";
import { Ic } from '../../orm/db';
import { IIcModel } from "../../orm/models/ic"; 
    
export default {
    type: new GraphQLList(IcType),
    resolve(source, args) {
        let first:number = 0;
        if (args.first) {
            console.log('here?')
            first = args.first;
        }

        console.log('args', args);

        let query = Ic.find();

        // limit to the first x records
        if (first !== 0) {
            query = query.limit(first);
            console.log('take the first X records in query')
        }
        
        const data : Promise<IIcModel[]> = query.exec();
        if (!data){
            throw new Error("error while fetching data..")
        }
        return data;
    },
    args: {
        first: {
            type: GraphQLInt,
            description: "The first arg records are taken"            
        }
    }
}