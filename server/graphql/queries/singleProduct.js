import {GraphQLInt, GraphQLList} from "graphql";
import ProductType from "../types/ProductType.js";
import Db from "../../db/db.js";

const allProducts = {
    type: ProductType,
    args: {
        productId: {
            type: GraphQLInt
        },
    },
    resolve (root, args) {
        return Db.models.product.findByPk(args.productId);
    }
};

export default allProducts;