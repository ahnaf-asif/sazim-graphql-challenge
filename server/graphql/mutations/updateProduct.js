import productType from "../types/ProductType.js";
import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from "graphql";
import Db from "../../db/db.js";


const updateProduct = {
    type: productType,
    description: 'This mutation takes a product as argument and updates it',
    args: {
        productId: {
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
    async resolve(start, args){
        const product = await Db.models.product.findByPk(args.productId);
        // await product.removeCategories([1,2,3,4,5,6]);
        await product.update({
            title: args.title,
            description: args.description,
            price: args.price,
            rent: args.rent,
            rentPaymentPeriod: args.rentPaymentPeriod,
        });

        // removing the previous categories
        const prevCategories = await product.getCategories({attributes: ['id']});
        await product.removeCategories(prevCategories);

        // adding new categories
        for (const catId of args.categories) {
            const categoryFromDb = await Db.models.category.findByPk(catId);
            // adding productId and categoryId pair in CategoryProduct table (many to many relationship)
            await product.addCategory(categoryFromDb);
        }
        return await Db.models.product.findByPk(product.id);
    }
};

export default updateProduct;