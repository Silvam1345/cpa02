'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
//const ObjectId = Schema.Types.ObjectId;
//const Mixed = Schema.Types.Mixed;

var playerSchema = Schema( {
    id: Number,
    first_name: String,
    height_feet: Number,
    height_inches: Number,
    last_name: String,
    position: String,
    team: {
        id: Number,
        abbreviation: String,
        city: String,
        conference: String,
        division: String,
        full_name: String,
        name: String
    },
});

module.exports = mongoose.model('Player', playerSchema);