
const LaunchType = require('./NodeTypes/Launch');
const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
} = require('graphql');


const spaceXApi = 'https://api.spacexdata.com/v3/launches/';

// GraphQL Schema definition

// Root query to provide enpoints with (data) resolvers 
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                // Getting the acutal data
                return axios.get(spaceXApi)
                    .then(res => res.data);
            }
        },
        launch: {
            type: LaunchType,
            args: {
                flight_number: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios.get(`${spaceXApi}/${args.flight_number}`)
                    .then(res => res.data);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});