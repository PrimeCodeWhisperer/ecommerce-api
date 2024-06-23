const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const { faker } = require('@faker-js/faker');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Generate random products
const generateRandomProducts = (num) => {
  const products = [];
  for (let i = 0; i < num; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      description: faker.commerce.productDescription(),
      category: faker.commerce.department(),
      stock: faker.datatype.number({ min: 0, max: 1000 }),
    });
  }
  return products;
};

const products = generateRandomProducts(40);

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Database seeded with placeholder data');
  mongoose.connection.close();
};

seedDB();
