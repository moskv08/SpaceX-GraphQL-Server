const axios = require('axios');
const { 
    GraphQLObjectType,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
} = require('graphql');

// GraphQL Schema definition
// Type: Launch
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt},
        // mission_name: {type: GraphQLString},
        // launch_success: {type: GraphQLBoolean},
        // rocket: {type: RocketType}
    }),
});

// Type: Rocket
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString},
        // rocket_name: {type: GraphQLString},
        // rocket_type: {type: GraphQLString},
    }),
});

// Root query to provide enpoints with (data) resolvers 
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent, args){
                // Getting the acutal data
                return axios.get('https://api.spacexdata.com/v3/launches/')
                .then(res => res.data);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});