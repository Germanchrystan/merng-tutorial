const { ApolloServer, ApolloError, PubSub } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');
const { MONGODB } = require('./config');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const Post = require('./models/Post');

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req, pubsub})
})

mongoose.connect(MONGODB, {useNewUrlParser: true})
.then(()=>{
    console.log("MongoDB Connected")
    return server.listen({ port: 5000})
})
.then(res => console.log(`Server Running at ${res.url}`))