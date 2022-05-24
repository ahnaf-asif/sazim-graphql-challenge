import ProductType from "../types/ProductType.js";
import {GraphQLInt, GraphQLNonNull} from "graphql";
import Db from "../../db/db.js";

const buyProduct = {
    type: ProductType,
    description: 'This mutation adds a product (which is created by a user)',

    // defining the arguments that can be passed through this mutation
    args: {
        userId: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        productId: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    async resolve (source, args) {
        try{
            await Db.models.purchaseHistory.create({
                userId: args.userId,
                productId: args.productId
            });
            return await Db.models.product.findByPk(args.productId);
        }catch(e){
            console.log(e);
        }
    }
}

export default buyProduct;