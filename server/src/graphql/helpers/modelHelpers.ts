import YearValue from '../../orm/models/yearValue';

import {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLBoolean, 
    GraphQLList, 
    GraphQLInt,
    GraphQLFloat,
    GraphQLScalarType,
    GraphQLObjectTypeConfig,
    GraphQLFieldConfig,
    GraphQLFieldConfigMap,
    GraphQLResolveInfo
} from 'graphql'; 

import GraphQLYearValue from '../objectType/graphQLYearValue';

class ModelHelpers {
    // construct a set of properties that we take from the object, that then populate an array of year values.
    //   this is just remapping something like value of CHG1AT0, ..1, ..2 -> array
    //
    // Z in the subMaskChar here - indicates  what will be replaced in the given mask from a variable. this 
    //   is considered unique in this scope so far and will be replaced with a year starting at 0
    static createYearValues(obj:any, initialYear:number, variableMask:string, yearCount:number, subMaskChar:string): YearValue[] {
        let ret = [];
        for (var i = 0; yearCount > i ; i++) {
            let propertyInObj = variableMask.replace(subMaskChar, i.toString());
            // this is the property we reference
            let actualObj:number = obj[propertyInObj];

            ret.push(new YearValue(initialYear + i, actualObj));
        }

        return ret;
    }

    // attached a constrctued field config a map. specialized for our year values.
    static attachFieldConfigToMap(map: GraphQLFieldConfigMap<any, any>, fieldName: string, mask: string, yearEnd:number = 2014, yearCount:number = 4, subMaskChar:string = 'Z') {
        map[fieldName] = {
            type: new GraphQLList(GraphQLYearValue),
            resolve: function(obj) {
                return ModelHelpers.createYearValues(obj, yearEnd, mask, yearCount, subMaskChar);
            }
        };
    }
}

export default ModelHelpers;