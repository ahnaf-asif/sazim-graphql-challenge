import Express from 'express';
import { graphqlHTTP } from 'express-graphql';
import Schema from './graphql/schema.js';
import cors from "cors";

const APP_PORT = 4000; // feel free to edit/update the APP_PORT

const app = Express();

app.use(cors({
    origin: "*"
}))

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
}));


app.listen(APP_PORT, ()=> {
    console.log(`App listening on port ${APP_PORT}`);
});

