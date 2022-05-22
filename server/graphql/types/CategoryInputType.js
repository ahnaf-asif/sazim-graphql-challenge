import {
    GraphQLInt, GraphQLString,  GraphQLInputObjectType
} from 'graphql';

const CategoryInputType = new GraphQLInputObjectType({
    name: 'CategoryInputType',
    description: 'Products created by users',
    fields: () => {
        return {
            id:{
                type: GraphQLInt,
            }
        };
    }
});

export default CategoryInputType