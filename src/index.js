const { ApolloServer } = require('apollo-server');
const typeDefs = require("./schema");
const resolvers = require('./resolvers');

const LicitacaoService = require('./service/licitacaoService');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        licitacaoService: new LicitacaoService()
    })
});

server.listen().then(({ url }) => {
    console.log(`server ready at ${url}`)
});