const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allPosts = await getAllPosts()
    res.json(allPosts)
  } catch (e) {
    console.log(e);
  }
});

router.get('/:id', validateId, (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;
