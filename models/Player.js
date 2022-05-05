'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
//const ObjectId = Schema.Types.ObjectId;
//const Mixed = Schema.Types.Mixed;

var playerSchema = Schema( {
    firstName: String,
    lastName: String,
    playerId: Number,
    teamId: Number,

});

module.exports = mongoose.model('Player', playerSchema);