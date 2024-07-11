const Form = require('../models/Form');

const submitForm = async (req, res) => {
  const { title, description } = req.body;

  try {
    const form = await Form.create({
      title,
      description,
      user: req.user._id,
    });

    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllForms = async (req, res) => {
  try {
    const forms = await Form.find().populate('user', 'username email');

    res.json(forms);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { submitForm, getAllForms };
