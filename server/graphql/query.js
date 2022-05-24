import {GraphQLObjectType} from "graphql";
import allProducts from "./queries/allProducts.js";
import allCategories from "./queries/allCategories.js";
import singleProduct from "./queries/singleProduct.js";

const Query = new GraphQLObjectType({
    name: 'Queries',
    description: 'Root query object',
    fields: () => {
        return {
            allProducts: allProducts,
            allCategories: allCategories,
            singleProduct: singleProduct,
        };
    }
});

export default Query;