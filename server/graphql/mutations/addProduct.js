import ProductType from "../types/ProductType.js";
import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from "graphql";
import Db from "../../db/db.js";
import CategoryType from "../types/CategoryType.js";

const addProduct = {
    type: ProductType,
    description: 'This mutation adds a product (which is created by a user)',
    args: {
        userId: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        description: {
            type: new GraphQLNonNull(GraphQLString)
        },
        price: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        rent: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        rentPaymentPeriod: {
            type: new GraphQLNonNull(GraphQLString)
        },
        categories: {
            type: new GraphQLNonNull( new GraphQLList(CategoryType))
        }
    },
    resolve (source, args) {
        return Db.models.user.findByPk(args.userId).then( user => {
            return user.createProduct({
                title: args.title,
                description: args.description,
                price: args.price,
                rent: args.rent,
                rentPaymentPeriod: args.rentPaymentPeriod,
            });
        });
    }
}

export default addProduct;