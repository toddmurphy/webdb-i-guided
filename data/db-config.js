const knex = require('knex');

const config = require('../knexfile.js');

module.exports = knex(config.development);

// import this thing from someplace else
// and do sql with it in JS