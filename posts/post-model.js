// database access using knex
const db = require('../data/db-config.js');

function getAllPosts() {
  // i will use 'db' to do sql with JS
  // SELECT * FROM posts;
  // returns an array of records
  return db('posts')
}

function getPostById(id) {
  // SELECT * FROM posts WHERE id = id
  // resolves to an array of records
  return db('posts').where({ id }).first()
}

function insertNewPost({ title, contents }) {
  // INSERT INTO posts (title, contents)
  // VALUES (title, contents);
  return db('posts').insert({ title, contents })
}

function replacePostById({ id, title, contents }) {
  // UPDATE posts SET title = title, contents = contents
  // WHERE id = id;
  return db('posts').where({ id }).update({ title, contents })
}

function deletePostById(id) {
  // DELETE FROM posts
  // WHERE id = id;
  return db('posts').where({ id }).del()
}

module.exports = {
  getAllPosts,
  getPostById,
  insertNewPost,
  replacePostById,
  deletePostById,
}
