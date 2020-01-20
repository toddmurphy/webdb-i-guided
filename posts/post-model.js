// database access using knex
const db = require('../data/db-config.js');

function getAllPosts() {
  // i will use 'db' to do sql with JS
  //  SELECT * FROM posts;
  return db('posts')
}

function getPostById(id) {

}

module.exports = {
  getAllPosts,
  getPostById,
}
