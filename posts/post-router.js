const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await db('posts').select();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'No data returned from server', error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    //translates to `SELECT * FROM posts WHERE id = ?`
    const postsByID = await db('posts')
      .where('id', req.params.id)
      .first();
    res.json(postsByID);
  } catch (error) {
    res.status(500).json({ message: 'No data returned from server', error });
  }
});

router.post('/', async (req, res) => {
  try {
    const newPost = {
      title: req.body.title,
      contents: req.body.contents
    };
    //translates to `INSERT INTO posts {title, contents} VALUES(?, ?)
    const [id] = await db('posts').insert(newPost);
    res.json(
      await db('posts')
        .where('id', id)
        .first()
    );
  } catch (error) {
    res.status(500).json({ message: 'No data posted to server', error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedPost = {
      title: req.body.title,
      contents: req.body.contents
    };

    //translates to `UPDATE posts SET title = ? AND contents WHERE id =?`
    await db('posts')
      .where('id', req.params.id)
      .update(updatedPost);
    res.json(
      await db('posts')
        .where('id', req.params.id)
        .first()
    );
  } catch (error) {
    res.status(500).json({ message: 'No data updated on server', error });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletePost = await db('posts')
      .where('id', req.params.id)
      .del();

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'No data deleted from server', error });
  }
});

module.exports = router;
