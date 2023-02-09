const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const CategoryData = await Category.findAll();
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
  const CategoryData = await Category.findByPk(req.params.id, {
  include: [{ model: Product, as: 'products' }]
  });
  if (!CategoryData) {
    res.status(404).json({ message: 'No Category found with this id!' });
    return;
  }
} catch (err) {
  res.status(500).json(err);
  }
  });
  


router.post('/', async (req, res) => {
  try {
    const CategoryData = await Category.create(req.body);
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  Category.update({
  category_name: req.body.category_name
  },
  {
  where: {
  id: req.params.id
  }
  })
  });

router.delete('/:id', async (req, res) => {
  try {
    const CategoryData = awaitCategory.destroy({
      where: { id: req.params.id }
    });
    if (!CategoryData) {
      res.status(404).json({ message: 'NoCategory with this id!' });
      return;
    }
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
