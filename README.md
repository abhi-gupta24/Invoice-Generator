# Invoice Generator

This project is a Node.js-based Invoice Generator application. It allows users to register, log in, add products, and generate invoices in PDF format. The backend is built using Express.js, MongoDB, and Puppeteer.

## Setup Instructions

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/invoice-generator.git
cd invoice-generator

2. Install dependencies:
npm install


3. Set up environment variables:
Create a .env file in the root directory and add the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


4. Start the application:
npm start
```

# \***\*\*\*\*\***\*\*\***\*\*\*\*\***Adding api testing manual here \***\*\*\*\*\***\*\*\*\***\*\*\*\*\***

1. baseUrl: Set this to http://localhost:5000 (or the URL of your deployed API).
   authToken: Leave this empty for now; it will be updated after the login request.

2. Creating the POSTMAN Collection

Request 1: User Registration
Request Type: POST
URL: {{baseUrl}}/api/auth/register
Body:
Select raw and set the type to JSON.

Add the following JSON:

json

{
"name": "John Doe",
"email": "john.doe@example.com",
"password": "password123"
}
Save this request in your collection.
Request 2: User Login
Request Type: POST

URL: {{baseUrl}}/api/auth/login

In Body:
Select raw and set the type to JSON.

Add the following JSON:

json
Copy code
{
"email": "john.doe@example.com",
"password": "password123"
}

Tests: Add the following script to automatically set the authToken in the environment after a successful login:

Request 3: Add Products
Request Type: POST
URL: {{baseUrl}}/api/products/add-products
Authorization:
Select Bearer Token.
Set the token to {{authToken}}.

Body:
Select raw and set the type to JSON.

Add the following JSON:

json
Copy code
{
"products": [
{
"name": "Product 1",
"qty": 10,
"rate": 100
},
{
"name": "Product 2",
"qty": 5,
"rate": 200
}
]
}

Request 4: View Quotations
Request Type: GET
URL: {{baseUrl}}/api/invoices/view-quotations
Authorization:
Select Bearer Token.
Set the token to {{authToken}}.

#**********************************\*\*\*\***********************************
