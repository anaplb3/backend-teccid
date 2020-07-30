const { ApolloServer } = require('apollo-server');
const { makeAugmentedSchema, inferSchema } = require('neo4j-graphql-js');
const neo4j = require('neo4j-driver');
require('dotenv').config();

const driver = neo4j.driver(
    process.env.URL,
    neo4j.auth.basic(process.env.USER, process.env.PWD)
);

const inferAugmentedSchema = driver => {
    return inferSchema(driver).then(result => {
        return makeAugmentedSchema({
            typeDefs: result.typeDefs
        });
    })
}

const createServer = schema =>
    new ApolloServer({
        schema,
        context: { driver }
    });

inferAugmentedSchema(driver)
    .then(createServer)
    .then(server => server.listen())
    .then(({ url }) => {
        console.log(`server ready at ${url}`);
    })
    .catch(err => console.error(err));