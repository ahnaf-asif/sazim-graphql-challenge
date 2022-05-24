import productType from "../types/ProductType.js";
import {GraphQLInt,  GraphQLNonNull} from "graphql";
import Db from "../../db/db.js";


const increaseProductViews = {
    type: productType,
    description: 'This mutation increases view count of a product by 1',
    args: {
        productId: {
            type: new GraphQLNonNull(GraphQLInt)
        },
    },
    async resolve(start, args){
        const product = await Db.models.product.findByPk(args.productId);
        product.views++;
        await product.save();
        return product;
    }
};

export default increaseProductViews;