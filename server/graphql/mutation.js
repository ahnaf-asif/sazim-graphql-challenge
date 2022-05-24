import { GraphQLObjectType } from "graphql";

import registerUser from './mutations/registerUser.js';
import addProduct from './mutations/addProduct.js';
import loginUser from "./mutations/loginUser.js";
import deleteProduct from "./mutations/deleteProduct.js";
import addCategories from "./mutations/addCategories.js";
import updateProduct from "./mutations/updateProduct.js";
import increaseProductViews from "./mutations/increaseProductViews.js";
import buyProduct from "./mutations/buyProduct.js";
import rentProduct from "./mutations/rentProduct.js";

const Mutation = new GraphQLObjectType({
    name: 'Mutations',
    description: 'Functions to set stuff',
    fields () {
        return {
            // authentication
            registerUser: registerUser,
            loginUser: loginUser,

            // product related mutations
            addProduct: addProduct,
            updateProduct: updateProduct,
            deleteProduct: deleteProduct,
            buyProduct: buyProduct,
            rentProduct: rentProduct,
            increaseProductViews: increaseProductViews,

            //category related mutations
            addCategories: addCategories,
        };
    }
});

export default Mutation;