import {GraphQLList} from "graphql";
import CategoryType from "../types/CategoryType.js";
import Db from "../../db/db.js";
import ProductType from "../types/ProductType.js";

const allCategories = {
    type: new GraphQLList(CategoryType),
    resolve (root, args) {
        return Db.models.category.findAll({ where: args });
    }
};

export default allCategories;