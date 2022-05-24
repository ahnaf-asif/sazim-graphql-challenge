import {GraphQLInt, GraphQLList} from "graphql";
import ProductType from "../types/ProductType.js";
import Db from "../../db/db.js";

const boughtProducts = {
    type: new GraphQLList(ProductType),
    args: {
        userId: {
            type: GraphQLInt
        }
    },
    async resolve (root, args) {
        const productIdList = await Db.models.purchaseHistory.findAll({
            where: {
                buyerId: args.userId
            },
            order: [
                ['productId', 'DESC']
            ],
            attributes: ['productId']
        });

        let boughtProducts = [];
        for(const prod of productIdList){
            const currentProduct = await Db.models.product.findByPk(prod.productId);
            boughtProducts.push(currentProduct);
        }
        return boughtProducts;
    }
};

export default boughtProducts;