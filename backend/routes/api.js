const express = require('express');
const Item = require('../models/item');
const router = express.Router();

router.get('/items', (req, res, next) => {
    Item.find({}, 'name')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/items', (req, res, next) => {
    if (req.body.name) {
        Item.create(req.body)
          .then((data) => res.json(data))
          .catch(next);
      } else {
        res.json({
          error: 'The name field is empty',
        });
      }
});

router.get('/items/:id', (req, res, next) => {
    Item.find({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

router.delete('/items/:id', (req, res, next) => {
    Item.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;