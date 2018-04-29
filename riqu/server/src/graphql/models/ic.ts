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
import ModelHelpers from '../helpers/modelHelpers';

import * as GraphQLDate from 'graphql-date';

const hdFieldsMap : GraphQLFieldConfigMap<any, any> = {
    UNITID: { type: GraphQLInt },
    CreatedAt: { type: GraphQLDate }
};

// create a mapping that constructs an array of years, this array then maps to a specific business value over those years. 
// in this case like published in district tuition
ModelHelpers.attachFieldConfigToMap(hdFieldsMap, 'PublishedInDistrictTuition', 'CHG1ATZ');
ModelHelpers.attachFieldConfigToMap(hdFieldsMap, 'PublishedInDistrictFees', 'CHG1AFZ');

export default new GraphQLObjectType({
    name: 'icType',
    description: 'Tuition, fees by year',
    fields: hdFieldsMap
});

