import ProductType from "../types/ProductType.js";
import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from "graphql";
import Db from "../../db/db.js";

const addProduct = {
    type: ProductType,
    description: 'This mutation adds a product (which is created by a user)',

    // defining the arguments that can be passed through this mutation
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
            type: new GraphQLNonNull(new GraphQLList(GraphQLInt)) // list of category-ids that are associated with the post
        }
    },
    async resolve (source, args) {

        // finding the user who created the product
        const user = await Db.models.user.findByPk(args.userId);

        // creating the product
        const product = await user.createProduct({
            title: args.title,
            description: args.description,
            price: args.price,
            rent: args.rent,
            rentPaymentPeriod: args.rentPaymentPeriod,
        });

        // attaching the categories from the args.categories list one by one.
        for (const catId of args.categories) {
            const categoryFromDb = await Db.models.category.findByPk(catId);
            // adding productId and categoryId pair in CategoryProduct table (many to many relationship)
            await product.addCategory(categoryFromDb);
        }
        return await Db.models.product.findByPk(product.id);
    }
}

export default addProduct;