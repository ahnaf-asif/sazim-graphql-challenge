import {GraphQLInt, GraphQLList} from "graphql";
import ProductType from "../types/ProductType.js";
import Db from "../../db/db.js";

const allProducts = {
    type: new GraphQLList(ProductType),
    args: {
      userId: {
          type: GraphQLInt
      }
    },
    async resolve (root, args) {
        // return Db.models.product.findAll({
        //     where: args,
        //     order: [
        //         ['id', 'ASC']
        //     ]
        // });
        const user = await Db.models.user.findByPk(args.userId);
        return user.getProducts({
            order: [
                ['id', 'DESC']
            ]
        });
    }
};

export default allProducts;