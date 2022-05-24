import ProductType from "../types/ProductType.js";
import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from "graphql";
import Db from "../../db/db.js";

const rentProduct = {
    type: ProductType,
    description: 'This mutation adds a product (which is created by a user)',

    // defining the arguments that can be passed through this mutation
    args: {
        renterId: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        borrowerId: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        productId: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        from: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        to: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    async resolve (source, args) {
        await Db.models.rentHistory.create({
            sellerId: args.sellerId,
            renterId: args.renterId,
            productId: args.productId,
            from: args.from,
            to: args.to,
        });
        const productBought = await Db.models.product.findByPk(args.productId);
        productBought.status="rent";
        await productBought.save();

        return productBought;
    }
}

export default rentProduct;