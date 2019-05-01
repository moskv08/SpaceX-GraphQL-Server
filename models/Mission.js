const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLString,
} = require('graphql');

// Type: Mission
const MissionType = new GraphQLObjectType({
    name: 'Mission',
    fields: () => ({
        mission_id: { type: GraphQLString },
        mission_name: { type: GraphQLString },
        website: { type: GraphQLString },
        description: { type: GraphQLString }
    }),
});

module.exports = MissionType;