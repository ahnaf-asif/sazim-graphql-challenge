import {GraphQLObjectType, GraphQLString} from "graphql";
import UserType from "./UserType.js";
import ProductType from "./ProductType.js";

const rentHistoryType = new GraphQLObjectType({
    name: 'rentHistoryType',
    description: 'Purchase History Type ',
    fields: () => {
        return {
            from: {
                type: GraphQLString,
                resolve(rentHistory){
                    return rentHistory.from;
                }
            },
            to: {
                type: GraphQLString,
                resolve(rentHistory){
                    return rentHistory.to;
                }
            },
            product: {
                type: ProductType,
                resolve(rentHistory){
                    return rentHistory.getProduct();
                }
            },
            user: {
                type: UserType,
                resolve(rentHistory){
                    return rentHistory.getUser();
                }
            }
        };
    }
});

export default rentHistoryType