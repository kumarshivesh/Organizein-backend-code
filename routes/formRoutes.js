const express = require('express');
const { submitForm, getAllForms } = require('../controllers/formController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/submit-form', protect, submitForm);
router.get('/admin/forms', protect, admin, getAllForms);

module.exports = router;
