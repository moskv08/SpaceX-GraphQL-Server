const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');

// Read the .env File
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Create the route handler
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    }));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));