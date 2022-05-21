import {GraphQLObjectType} from "graphql";
import allProducts from "./queries/allProducts.js";
import allCategories from "./queries/allCategories.js";

const Query = new GraphQLObjectType({
    name: 'Queries',
    description: 'Root query object',
    fields: () => {
        return {
            allProducts: allProducts,
            allCategories: allCategories
        };
    }
});

export default Query;