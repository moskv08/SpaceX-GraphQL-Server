const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
const { port } = require('./config/');

const app = express();

// Create the route handler
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    }));

app.listen(port, () => console.log(`Server is running on ${port}...`));