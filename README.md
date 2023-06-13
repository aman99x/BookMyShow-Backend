# bookmyshow-backend

The Book Your Show backend is built using Express.js and MongoDB to store and retrieve user data efficiently. It provides endpoints for retrieving and storing booking information.

# Technologies Used
# Backend
- Express.js: The backend is developed using Express.js, a popular web application framework for Node.js.
- Mongoose: Mongoose is used to establish the connection with MongoDB and perform database operations.

# Endpoints
- GET - https://bookmyshow-backend-7wzv.onrender.com/api/booking
  - This endpoint retrieves booking information from the MongoDB database.

- POST - https://bookmyshow-backend-7wzv.onrender.com/api/booking
  - This endpoint is used to send booking information to the MongoDB database.

# Installation and Setup Instructions

1. Installation: Run `npm install` in the project directory to install the required dependencies.

2. Start the server: Run `node index.js` in the project directory. If you prefer automatic server restart on file changes, you can use Nodemon instead of Node (make sure Nodemon is installed on your system).

By following these steps, you will have the Book Your Show backend up and running, ready to handle API requests to retrieve and store booking information in the MongoDB database.
