import * as Koa from 'koa';
import { injector } from 'njct';
import * as compose from 'koa-compose';
import * as Router from 'koa-tree-router';
import * as koaBodyparser from 'koa-bodyparser';
import { config } from './config';
import { errorHandler } from './app/errors/errors';
import { home } from './app/home/home.controller';
import { getTrainingRequest } from './app/training-request/training-request.controller';
import { catRoutes } from './app/cat/cat.routes';
import { trainingRequestRoutes } from './app/training-request/training-request.routes';
import { schema } from './app/graphql';
const { ApolloServer, gql } = require('apollo-server-koa');

// https://www.apollographql.com/docs/apollo-server/v2/api/apollo-server.html
const server = new ApolloServer({ schema });
const app = new Koa();
const router = new Router();
catRoutes(router);
trainingRequestRoutes(router);
server.applyMiddleware({ app });
app.use(errorHandler());
app.use(koaBodyparser({ strict: false }));
router.get('/', home);

app.use(router.routes());
app.listen(config.get('port'), () => {
    console.log(`Server running on port ${config.get('port')}`);
    console.log(`Graphql server is running running ${server.graphqlPath}`);
});
