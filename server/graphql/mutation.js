import { GraphQLObjectType } from "graphql";

import registerUser from './mutations/registerUser.js';
import addProduct from './mutations/addProduct.js';
import loginUser from "./mutations/loginUser.js";

const Mutation = new GraphQLObjectType({
    name: 'Mutations',
    description: 'Functions to set stuff',
    fields () {
        return {
            registerUser: registerUser,
            loginUser: loginUser,
            addProduct: addProduct,
        };
    }
});

export default Mutation;