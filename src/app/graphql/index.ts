import { makeExecutableSchema } from 'graphql-tools';
import { readFileSync } from 'fs';

const typeDefs = readFileSync(`${__dirname}/main.graphql`).toString();

const resolvers = {
    Query: {
        hello: () => 'Hello world! ' + Math.random(),
    },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });
