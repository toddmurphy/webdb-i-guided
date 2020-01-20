const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allPosts = await getAllPosts()
  } catch (e) {
    console.log(e);
  }
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;
