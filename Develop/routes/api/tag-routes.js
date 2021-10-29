const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint
// be sure to include its associated Product data
// find all tags
router.find('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Tag }, { model: ProductTag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Tag }, { model: ProductTag }],
    });

    if (!tagData) {
      res.status(404).json({ message: 'No Product found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  try {
    const tagData = await Tag.create(req.body.id);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(Data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
