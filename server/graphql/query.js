import {GraphQLObjectType} from "graphql";
import allProducts from "./queries/allProducts.js";
import allCategories from "./queries/allCategories.js";
import singleProduct from "./queries/singleProduct.js";
import userProducts from "./queries/userProducts.js";

const Query = new GraphQLObjectType({
    name: 'Queries',
    description: 'Root query object',
    fields: () => {
        return {
            allProducts: allProducts,
            allCategories: allCategories,
            singleProduct: singleProduct,
            userProducts: userProducts,
        };
    }
});

export default Query;