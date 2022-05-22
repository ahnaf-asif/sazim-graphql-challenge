import {GraphQLList, GraphQLString} from "graphql";
import Db from "../../db/db.js";
import CategoryType from "../types/CategoryType.js";

const addCategories = {
    type: new GraphQLList(CategoryType),
    args: {
        categories: {
            type: new GraphQLList(GraphQLString) // List of category names
        }
    },
    async resolve(start, args) {

        for (const categoryName of args.categories) {
            const res = await Db.models.category.create({
                name: categoryName
            });
            // console.log(res);
        }
        return await Db.models.category.findAll();
    }
}

export default addCategories