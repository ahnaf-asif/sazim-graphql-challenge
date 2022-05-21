import {
    GraphQLObjectType,
    GraphQLInt, GraphQLString, GraphQLFloat, GraphQLList
} from 'graphql';

import ProductType from './ProductType.js';

const CategoryType = new GraphQLObjectType({
    name: 'CategoryType',
    description: 'Products created by users',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(category){
                    return category.id;
                }
            },
            name: {
                type: GraphQLString,
                resolve(category){
                    return category.name;
                }
            },
            createdAt: {
                type: GraphQLString,
                resolve(category){
                    return category.createdAt;
                }
            },
            products: {
                type: new GraphQLList(ProductType),
                resolve(category){
                    return category.getProducts();
                }
            }
        };
    }
});

export default CategoryType