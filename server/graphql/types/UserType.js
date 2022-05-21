import {
    GraphQLObjectType,
    GraphQLInt, GraphQLString, GraphQLList
} from 'graphql';

import ProductType from "./ProductType.js";

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