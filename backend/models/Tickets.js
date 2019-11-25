const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const TicketSchema = new Schema({
    movie_title: {
        type: String
    },
    date_watched: {
        type: Date
    },
    time_watched: {
        type: String
    },
    cinema: {
        type: Schema.Types.ObjectID, ref: 'cinema'
    },
    room: {
        type: String
    },
    seat_row: {
        type: Number
    },
    seat_number: {
        type: Number
    },
    ticket_price: {
        type: Number
    }
});

module.exports = Admin = mongoose.model('ticket', TicketSchema);