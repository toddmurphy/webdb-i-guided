const express = require('express');
const {
  getAllPosts,
  getPostById,
  insertNewPost,
  replacePostById,
  deletePostById,
} = require('./post-model');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allPosts = await getAllPosts()
    res.json(allPosts)
  } catch (e) {
    console.log(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const thePostIWant = await getPostById(req.params.id)
    res.json(thePostIWant)
  } catch (e) {
    console.log(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, contents } = req.body;
    const id = await insertNewPost({ title, contents })
    res.json({ message: `new post with id ${id} was created` })
  } catch (e) {
    console.log(e);
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, contents } = req.body;
  try {
    const count = await replacePostById({ id, title, contents })
    res.json({ message: `${count} posts got updated`})
  } catch (e) {
    console.log(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await deletePostById(req.params.id)
    res.json({
      message: `${count} posts got deleted`
    })
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
