import express from 'express';
import compression from 'compression';
import cors from 'cors';
//The line bellow is use for grapphiQL
//import {graphqlHTTP} from 'express-graphql';
import schema from './schema'
import {ApolloServer} from 'apollo-server-express';
import { createServer } from 'http';

const app = express();
//settings
app.set('port', 3000)

app.use('*', cors());

app.use(compression());


// **** when you create a new structure, this section must go in resolversmap, query and index in another folders

// //define types scheme
// const typeDefs = `
//     type Query{
//         hola: String!
//         holaConNombre(nombre: String!): String!
//         holaMundoGraphql: String!
//     }
// `;


// provides responses of queries
// const resolvers : IResolvers = {
//     Query: {
//         hola():String{
//             return 'Hello world';
//         },
//         holaConNombre(__:void, args):String{
//             return `Hello little ${args.nombre}`;
//         },
//         holaMundoGraphql():String{
//             return 'Hello GraphQL!!';
//         },
//     }
// }

// const schema : GraphQLSchema = makeExecutableSchema({
//     typeDefs,
//     resolvers
// })

// **** When you create a new structure, this section must go in resolversmap, query and index in another folders

// **** Routing whit graphiQL
// app.use('/', graphqlHTTP({
//     schema,
//     graphiql: true
// }))
// **** Routing whit graphiQL



// Apollo configs

const server = new ApolloServer({
    schema,
    introspection:true //this is necessary

});

server.applyMiddleware({app})
const htppServer = createServer(app);

//starting server
htppServer.listen(
    app.get('port'),
    ()=> console.log(`server on port http://localhost:${app.get('port')}/graphql`)
)