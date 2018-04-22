const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/football-app');

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} = require('graphql')

const PlayerModel = mongoose.model('Player', { name: String });

const PlayerType = new GraphQLObjectType({
    name: 'Player',

    fields: () => ({
        _id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString,
        },
        slug: {
            type: GraphQLString,
            resolve: source => source._id.toString().slice(0, 6)
        }
    })
})

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'PlayerQuery',

        fields: () => ({
            players: {
                type: new GraphQLList(PlayerType),
                description: "Retrieve all players",
                resolve: () => PlayerModel.find()
            },
            player: {
                type: PlayerType,
                description: "Retrieve player by their ID",
                args: {
                    id: { type: GraphQLString }
                },
                resolve: (root, args) => PlayerModel.findById(args.id)
            }
        })
    }),
    mutation: new GraphQLObjectType({
        name: 'PlayerMutation',

        fields: {
            createPlayer: {
                type: PlayerType,
                args: {
                    name: { type: GraphQLString }
                },
                resolve: (source, args, context) => {
                    const player = new PlayerModel(args);
                    player.save();
                    return player;
                }
            }
        }
    })
})