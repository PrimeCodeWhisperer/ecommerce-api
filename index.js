const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoutes = require('./routes/products');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

app.use(express.json());

app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send('E-commerce API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
