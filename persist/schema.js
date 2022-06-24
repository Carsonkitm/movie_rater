const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: { type: String, default: '' },
    description: { type: String, default: ''},
    rating: { type: String, default: '0'}
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;