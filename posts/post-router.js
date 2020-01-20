const express = require('express');
const { getAllPosts, getPostById } = require('./post-model');
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

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;
