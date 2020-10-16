import { IResolvers } from "graphql-tools";

const query : IResolvers = {
    Query: {
        hola():String{
            return 'Hello world';
        },
        holaConNombre(__:void, args):String{
            return `Hello little ${args.nombre}`;
        },
        holaMundoGraphql():String{
            return 'Hello GraphQL!!';
        },
    }
}

export default query;