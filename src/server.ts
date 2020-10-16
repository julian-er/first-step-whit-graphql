import express from 'express';
import compression from 'compression';
import cors from 'cors';
import {graphqlHTTP} from 'express-graphql';
import schema from './schema'

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



//routing
app.use('/', graphqlHTTP({
    schema,
    graphiql: true
}))

 

//starting server
app.listen(
    app.get('port'),
    ()=> console.log(`server on port http://localhost:${app.get('port')}/graphql`)
)