import {GraphQLNonNull, GraphQLString} from "graphql";
import UserType from "../types/UserType.js";
import Db from "../../db/db.js";

const loginUser = {
    type: UserType,
    args: {
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    async resolve (root, args) {
        return await Db.models.user.findOne({ where: args });
    }
}

export default loginUser;