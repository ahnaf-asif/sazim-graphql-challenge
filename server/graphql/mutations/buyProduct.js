import ProductType from "../types/ProductType.js";
import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from "graphql";
import Db from "../../db/db.js";

const buyProduct = {
    type: ProductType,
    description: 'This mutation adds a product (which is created by a user)',

    // defining the arguments that can be passed through this mutation
    args: {
        sellerId: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        buyerId: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        productId: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    async resolve (source, args) {
        await Db.models.purchaseHistory.create({
            sellerId: args.sellerId,
            buyerId: args.buyerId,
            productId: args.productId,
        });
        const productBought = await Db.models.product.findByPk(args.productId);
        productBought.status="sold";
        await productBought.save();
        return productBought;
    }
}

export default buyProduct;