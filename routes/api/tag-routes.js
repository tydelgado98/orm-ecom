const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const TagData = awaitTag.findAll();
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
  const TagData = await Tag.findByPk(req.params.id, {
  include: [{ model: Product, as: 'products' }]
  });
  if (!TagData) {
    res.status(404).json({ message: 'No Tag found with this id!' });
    return;
  }
} catch (err) {
  res.status(500).json(err);
  }
  });

  router.post('/', async (req, res) => {
    try {
      const TagData = await Tag.create(req.body);
      res.status(200).json(TagData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:id', (req, res) => {
    Tag.update({
    Tag_name: req.body.Tag_name
    },
    {
    where: {
    id: req.params.id
    }
    })
    });

    router.delete('/:id', async (req, res) => {
      try {
        const TagData = awaitTag.destroy({
          where: { id: req.params.id }
        });
        if (!TagData) {
          res.status(404).json({ message: 'NoTag with this id!' });
          return;
        }
        res.status(200).json(TagData);
      } catch (err) {
        res.status(500).json(err);
      }
    });

module.exports = router;
