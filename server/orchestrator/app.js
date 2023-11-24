if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { typeDefs, resolvers } = require('./schema/productSchema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

console.clear();
startStandaloneServer(server, {
  listen: { port: Number(process.env.PORT) || 4000 },
})
  .then(({ url }) => {
    console.log(url);
  })
  .catch(console.log);
