import {
	GraphQLObjectType,
	GraphQLSchema
} from 'graphql';

import queries from './queries';

export default new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		fields: queries
    }),
    
    // TODO: if we decide to drop or add any
	// mutation: new GraphQLObjectType({
	// 	name: 'Mutation',
	// 	fields: mutations
	// })
});