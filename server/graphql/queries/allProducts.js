import {GraphQLList} from "graphql";
import ProductType from "../types/ProductType.js";
import Db from "../../db/db.js";

const allProducts = {
    type: new GraphQLList(ProductType),
    resolve (root, args) {
        return Db.models.product.findAll({
            where: args,
            order: [
                ['id', 'DESC']
            ]
        });
    }
};

export default allProducts;