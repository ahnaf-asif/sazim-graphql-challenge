import {GraphQLSchema} from "graphql";

import Query from './query.js';
import Mutation from './mutation.js';


const Schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});

export default Schema;
