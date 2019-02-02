import * as Koa from 'koa';
import { injector } from 'njct';
import * as compose from 'koa-compose';
import * as Router from 'koa-tree-router';
import * as koaBodyparser from 'koa-bodyparser';
import { config } from './config';
import { errorHandler } from './app/errors/errors';
import { home } from './app/home/home.controller';
import { getTrainingRequest } from './app/training-request/training-request.controller';
import * as cat from './app/cat/cat.controller';
const { ApolloServer, gql } = require('apollo-server-koa');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = new Koa();
const router = new Router();

server.applyMiddleware({ app });

app.use(errorHandler());
app.use(koaBodyparser({ strict: false }));
router.get('/', home);
router.get('/cat/browse', cat.catBrowse);
router.post('/cat', cat.catCreate);
router.get('/training-request/:trainingRequestId', getTrainingRequest);
app.use(router.routes());
app.listen(config.get('port'), () => {
    console.log(`Server running on port ${config.get('port')}`);
    console.log(`Graphql server is running running ${server.graphqlPath}`);
});
