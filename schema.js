const LaunchType = require('./models/Launch');
const RocketType = require('./models/Rocket');
const MissionType = require('./models/Mission');

const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
    GraphQLSchema,
} = require('graphql');

const spaceXApi = 'https://api.spacexdata.com/v3';

// GraphQL Schema definition
// https://medium.freecodecamp.org/how-to-set-up-a-graphql-server-using-node-js-express-mongodb-52421b73f474

// Root query to provide enpoints with (data) resolvers 
const RootQuery = new GraphQLObjectType({   
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                // Getting the acutal data
                return axios
                    .get(`${spaceXApi}/launches`)
                    .then(res => res.data);
            }
        },
        launch: {
            type: LaunchType,
            args: {
                flight_number: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios
                    .get(`${spaceXApi}/launches/${args.flight_number}`)
                    .then(res => res.data);
            }
        },
        rockets: {
            type: new GraphQLList(RocketType),
            resolve(parent, args) {
                // Getting the acutal data
                return axios
                    .get(`${spaceXApi}/rockets`)
                    .then(res => res.data);
            }
        },
        rocket: {
            type: RocketType,
            args: {
                rocket_id: { type: GraphQLString }
            },
            resolve(parent, args) {
                return axios
                    .get(`${spaceXApi}/rockets/${args.rocket_id}`)
                    .then(res => res.data);
            }
        },
        missions: {
            type: new GraphQLList(MissionType),
            resolve() {
                return axios
                    .get(`${spaceXApi}/missions`)
                    .then(res => res.data);
            }
        },
        mission: {
            type: MissionType,
            args: {
                mission_id: { type: GraphQLString }
            },
            resolve(parent, args) {
                return axios
                    .get(`${spaceXApi}/missions/${args.mission_id}`)
                    .then(res => res.data);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});