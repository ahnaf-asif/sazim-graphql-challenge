import {GraphQLInt, GraphQLNonNull} from "graphql";
import Db from "../../db/db.js";
import productType from "../types/ProductType.js";

const deleteProduct = {
    type: productType,
    description: 'This mutation takes an id and deletes the product with productId = id',
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    async resolve(source, args){
        // await product.destroy();
        const product =  await Db.models.product.findByPk(args.id);
        return product.destroy();
        // console.log('result is : ', res);
        // return {
        //     product : product.reload,
        //     deletedId: args.id
        // }
    }
}

export default deleteProduct;