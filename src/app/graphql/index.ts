import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = importSchema(__dirname + '/main.graphql');
const resolvers = {
    Query: {
        hello: () => 'Hello world! ' + Math.random(),
    },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });
