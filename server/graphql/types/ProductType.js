import {
    GraphQLObjectType,
    GraphQLInt, GraphQLString, GraphQLFloat, GraphQLList
} from 'graphql';
import UserType from "./UserType.js";
import CategoryType from "./CategoryType.js";

const ProductType = new GraphQLObjectType({
    name: 'ProductType',
    description: 'Products created by users',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(product){
                    return product.id;
                }
            },
            title: {
                type: GraphQLString,
                resolve(product){
                    return product.title;
                }
            },
            description: {
                type: GraphQLString,
                resolve(product){
                    return product.description;
                }
            },
            price: {
                type: GraphQLFloat,
                resolve(product){
                    return product.price;
                }
            },
            rent: {
                type: GraphQLFloat,
                resolve(product){
                    return product.rent;
                }
            },
            rentPaymentPeriod: {
                type: GraphQLString,
                resolve(product){
                    return product.rentPaymentPeriod;
                }
            },
            status: {
              type: GraphQLString,
              resolve(product){
                  return product.status;
              }
            },
            views: {
                type: GraphQLInt,
                resolve(product){
                    return product.views;
                }
            },
            createdAt: {
                type: GraphQLString,
                resolve(product){
                    return product.createdAt;
                }
            },
            categories: {
                type: new GraphQLList(CategoryType),
                resolve(product){
                    return product.getCategories();
                }
            },
            user: {
                type: UserType,
                resolve(product){
                    return product.getUser();
                }
            }
        };
    }
});

export default ProductType