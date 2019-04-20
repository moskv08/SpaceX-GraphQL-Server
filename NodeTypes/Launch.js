const RocketType = require('./Rocket');
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLString,
} = require('graphql');

// Type: Launch
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        rocket: { type: RocketType }
    }),
});

module.exports = LaunchType;