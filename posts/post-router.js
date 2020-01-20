const express = require('express');
const {
  getAllPosts,
  getPostById,
  insertNewPost,
  replacePostById,
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
    const stuff = await replacePostById({ id, title, contents })
    res.json(stuff)
  } catch (e) {
    console.log(e);
  }
});

router.delete('/:id', (req, res) => {

});

module.exports = router;
