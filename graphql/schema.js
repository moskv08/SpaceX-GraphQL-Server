
const { LaunchType, RocketType, MissionType } = require('../models');
const { endpoint } = require('../config');

const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
    GraphQLSchema,
} = require('graphql');

// Root query to provide enpoints with (data) resolvers 
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve() {
                // Getting the acutal data
                return axios
                    .get(`${endpoint}/launches`)
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
                    .get(`${endpoint}/launches/${args.flight_number}`)
                    .then(res => res.data);
            }
        },
        rockets: {
            type: new GraphQLList(RocketType),
            resolve() {
                // Getting the acutal data
                return axios
                    .get(`${endpoint}/rockets`)
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
                    .get(`${endpoint}/rockets/${args.rocket_id}`)
                    .then(res => res.data);
            }
        },
        missions: {
            type: new GraphQLList(MissionType),
            resolve() {
                return axios
                    .get(`${endpoint}/missions`)
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
                    .get(`${endpoint}/missions/${args.mission_id}`)
                    .then(res => res.data);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});