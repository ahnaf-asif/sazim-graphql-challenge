import {
    GraphQLObjectType,
    GraphQLInt, GraphQLString, GraphQLList
} from 'graphql';

import ProductType from "./ProductType.js";
import purchaseHistoryType from "./PurchaseHistoryType.js";
import rentHistoryType from "./RentHistoryType.js";

const UserType = new GraphQLObjectType({
    name: 'UserType',
    description: 'This represents a user',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(user){
                    return user.id;
                }
            },
            firstName: {
                type: GraphQLString,
                resolve(user){
                    return user.firstName;
                }
            },
            lastName: {
                type: GraphQLString,
                resolve(user){
                    return user.lastName;
                }
            },
            address: {
                type: GraphQLString,
                resolve(user){
                    return user.address;
                }
            },
            email: {
                type: GraphQLString,
                resolve(user){
                    return user.email;
                }
            },
            phone: {
                type: GraphQLString,
                resolve(user){
                    return user.phone;
                }
            },
            password: {
                type: GraphQLString,
                resolve(user){
                    return user.password;
                }
            },
            rentHistories: {
                type: new GraphQLList(rentHistoryType),
                resolve(user){
                    return user.getRentHistories();
                }
            },
            purchaseHistories: {
              type: new GraphQLList(purchaseHistoryType),
              resolve(user){
                  return user.getPurchaseHistories();
              }
            },
            products: {
                type: new GraphQLList(ProductType),
                resolve(user){
                    return user.getProducts();
                }
            }
        };
    }
});

export default UserType