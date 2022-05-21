import { GraphQLNonNull, GraphQLString} from "graphql";

import Db from "../../db/db.js";
import UserType from "../types/UserType.js";

const registerUser = {
    type: UserType,
    description: 'This mutation adds a user',
    args: {
        firstName: {type: new GraphQLNonNull(GraphQLString)},
        lastName: {type: new GraphQLNonNull(GraphQLString)},
        address: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        phone: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve (source, args) {
        return Db.models.user.create({
            firstName: args.firstName,
            lastName: args.lastName,
            address: args.address,
            email: args.email,
            phone: args.phone,
            password: args.password,
        });
    }
};

export default registerUser;