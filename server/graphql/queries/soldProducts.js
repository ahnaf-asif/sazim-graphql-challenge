import {GraphQLInt, GraphQLList} from "graphql";
import ProductType from "../types/ProductType.js";
import Db from "../../db/db.js";

const soldProducts = {
    type: new GraphQLList(ProductType),
    args: {
        userId: {
            type: GraphQLInt
        }
    },
    async resolve (root, args) {
        const productList = await Db.models.purchaseHistory.findAll({
            where: {
                sellerId: args.userId
            },
            order: [
                ['productId', 'DESC']
            ],
            attributes: ['productId']
        });

        let soldProducts = [];
        for(const prod of productList){
            const currentProduct = await Db.models.product.findByPk(prod.productId);
            soldProducts.push(currentProduct);
        }
        return soldProducts;
    }
};

export default soldProducts;