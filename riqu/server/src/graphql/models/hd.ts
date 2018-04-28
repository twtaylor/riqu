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
    GraphQLFieldConfigMap
} from 'graphql'; 

import * as GraphQLDate from 'graphql-date';

const hdFields : GraphQLFieldConfigMap<any, any> = {
    UNITID: {type: GraphQLInt},
    InstitutionName: {type: GraphQLString},
    Address: {type: GraphQLString},
    City: {type: GraphQLString},
    State: {type: GraphQLString},
    Zip: {type: GraphQLString},
    Latitude: {type: GraphQLFloat},
    Longitude: {type: GraphQLFloat},
    CreatedAt: {type: GraphQLDate}
};

export default new GraphQLObjectType({
    name: 'hdType',
    description: 'Description of college',
    fields: hdFields
});