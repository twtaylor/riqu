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
    UNITID: { type: GraphQLInt },
    PublishedInStateTuitionAndFees: { 
        type: GraphQLFloat 
    },
    PublishedOutOfStateTuitionAndFees: { type: GraphQLFloat },
    CreatedAt: { type: GraphQLDate }
};

export default new GraphQLObjectType({
    name: 'icType',
    description: 'Tuition, fees by year',
    fields: hdFields
});

