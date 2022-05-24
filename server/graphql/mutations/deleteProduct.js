import {GraphQLInt, GraphQLNonNull} from "graphql";
import Db from "../../db/db.js";
import productType from "../types/ProductType.js";

const deleteProduct = {
    type: productType,
    description: 'This mutation takes an id and deletes the product with productId = id',
    args: {
        productId: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    async resolve(source, args){

        const product =  await Db.models.product.findByPk(args.productId);

        // destroying all purchaseHistory data that is related to this product from the table
        await Db.models.purchaseHistory.destroy({
            where: {
                productId: args.productId
            }
        });

        return product.destroy();

    }
}

export default deleteProduct;