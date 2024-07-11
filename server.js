const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const formRoutes = require('./routes/formRoutes');
app.use('/api/users', userRoutes);
app.use('/api/forms', formRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  // Create initial admin user if none exists
  const adminExists = await User.findOne({ role: 'admin' });
  if (!adminExists) {
    const adminUser = new User({
      username: process.env.ADMIN_USERNAME,
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      role: 'admin',
    });
    await adminUser.save();
    console.log('Initial admin user created');
  }

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});
