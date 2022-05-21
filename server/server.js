import Express from 'express';
import { graphqlHTTP } from 'express-graphql';
import Schema from './graphql/schema.js';

const APP_PORT = 4000;

const app = Express();

// localhsot:4000/graphql

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
}));

app.listen(APP_PORT, ()=> {
    console.log(`App listening on port ${APP_PORT}`);
});

