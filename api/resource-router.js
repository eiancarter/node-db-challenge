const express = require('express');
const Resources = require('./resource-model');
const router = express.Router();

router.get('/', (req, res) => {
    Resources.find()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });
  
  router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Resources.findById(id)
    .then(resource => {
      if (resource) {
        res.json(resource);
      } else {
        res.status(404).json({ message: 'Could not find resource with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });

module.exports = router;