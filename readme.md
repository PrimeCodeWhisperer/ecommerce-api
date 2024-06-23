# E-commerce API

A fully functional e-commerce backend API developed using Node.js and Express.js, integrated with MongoDB, and deployed on Kubernetes.

## Table of Contents

- [E-commerce API](#e-commerce-api)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API endpoints](#api-endpoints)
  - [Environment Variables](#environment-variables)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Description

This project is an e-commerce API built with Node.js and Express.js. It includes features such as product management, payment gateway integration, and deployment using Docker and Kubernetes.

## Installation

1. Clone the repository:

   ```bash```
   ```git clone https://github.com/your-username/ecommerce-api.git```
   ```cd ecommerce-api```

2. Install dependencies:
   ```npm install```

3. Set up environment variables:
   - Create a .env file in the root directory and add your MongoDB URI:
   ```MONGO_URI=your_mongodb_connection_string```

4. Run the application locally:
    ```npm start```

5. To run the Docker container:

    ```docker build -t ecommerce-api .```
    ```docker run -p 3000:3000 --env-file .env ecommerce-api```

## Usage

Access the API endpoints via <http://localhost:3000> (or the external IP if deployed).

## API endpoints

Products

- GET /products: Get all products
- POST /products: Create a new product
- Body: { "name": "Product Name", "price": 29.99, "description": "Product Description", "category": "Category", "stock": 100 }
- GET /products/
: Get a product by ID
- PUT /products/
: Update a product by ID
- DELETE /products/
: Delete a product by ID

## Environment Variables

The .env file should include the following environment variable:

```MONGO_URI=your_mongodb_connection_string```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact <alex.paduraru@pad-u.com>.

This `README.md` file provides a comprehensive guide to your E-commerce API project, including its description, installation instructions, usage, API endpoints, environment variables, contributing guidelines, license, and contact information.
