import {
    ApolloClient, InMemoryCache, HttpLink, from,
} from "@apollo/client";

import {onError} from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
        graphqlErrors.map(({ message, location, path }) => {
            console.log(`Graphql error ${message}. ${location} ${path}`);
        });
    }
});

const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:4000/graphql" }),
]);

const client = await new ApolloClient({
    link: link,
    cache: new InMemoryCache()
});


export default client;