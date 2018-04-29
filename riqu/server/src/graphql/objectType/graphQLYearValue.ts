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

export default new GraphQLObjectType({
    name: 'GraphQLYearValue',
    description: 'Links a end year to a scalar value',
    fields: {
        endYear: { type: GraphQLInt },
        val: { type: GraphQLFloat }, 
    }
});