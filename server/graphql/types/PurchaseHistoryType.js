import {GraphQLObjectType} from "graphql";
import UserType from "./UserType.js";
import ProductType from "./ProductType.js";

const PurchaseHistoryType = new GraphQLObjectType({
    name: 'PurchaseHistoryType',
    description: 'Purchase History Type ',
    fields: () => {
        return {
            product: {
                type: ProductType,
                resolve(purchaseHistory){
                    return purchaseHistory.getProduct();
                }
            },
            user: {
                type: UserType,
                resolve(purchaseHistory){
                    return purchaseHistory.getUser();
                }
            }
        };
    }
});

export default PurchaseHistoryType