const express = require('express');
const graphQLMiddleware = require('express-graphql');
const app = express();
const schema = require('./schema');

app.use('/graphql', graphQLMiddleware({
    schema,
    graphiql: true
}));

const PORT = 3000;
app.listen(PORT);
console.log(`Server listening on port: ${PORT}`)