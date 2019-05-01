const {
    GraphQLObjectType,
    GraphQLString,
} = require('graphql');

// Type: Rocket
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString },
    }),
});

module.exports = RocketType;