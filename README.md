### Social Media Startup API
This is a README file for the Social Media Startup API, which is designed to provide essential functionality for your social network. This API utilizes a NoSQL database (MongoDB) to efficiently handle large amounts of unstructured data, helping your website scale as your user base grows.

### Table of Contents
Introduction
Getting Started
Usage
API Routes
Testing
Contributing
License

### Introduction
As a social media startup, you need a robust API to handle user interactions, posts, reactions, and friendships. This API is built to meet those needs. It provides endpoints for creating, reading, updating, and deleting users, thoughts (posts), reactions to thoughts, and managing friends in a user's friend list.

### Getting Started
To get started with the Social Media Startup API, follow these steps:

1. Clone the repository to your local machine: git clone https://github.com/your-social-media-startup/api.git
2. Navigate to the project directory: cd api
3. Install the required dependencies: npm install
4. Set up your MongoDB database. Make sure to update the database configuration in the .env file: MONGODB_URI=your-mongodb-uri
5. Start the application: npm start
Now, your server is running and the Mongoose models are synced to the MongoDB database.

## Usage
This API provides various endpoints to interact with your social network data. You can use tools like Insomnia or Postman to make requests to these endpoints.

## API Routes
- Users
 - GET /api/users: Get a list of all users.
 - GET /api/users/:userId: Get information about a specific user by their ID.
 - POST /api/users: Create a new user.
 - PUT /api/users/:userId: Update an existing user's information.
 - DELETE /api/users/:userId: Delete a user.
  
- Thoughts
 - GET /api/thoughts: Get a list of all thoughts.
 - GET /api/thoughts/:thoughtId: Get information about a specific thought by its ID.
 - POST /api/thoughts: Create a new thought.
 - PUT /api/thoughts/:thoughtId: Update an existing thought.
 - DELETE /api/thoughts/:thoughtId: Delete a thought.

- Reactions
 - POST /api/thoughts/:thoughtId/reactions: Create a reaction to a thought.
 - DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Delete a reaction to a thought.

- Friends
 - POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list.
 - DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.

# Testing
To test the API endpoints, you can use a tool like Insomnia. The API endpoints are designed to handle various CRUD (Create, Read, Update, Delete) operations for users, thoughts, reactions, and friendships.

# Contributors:
Rene Trevino, UCB tutor
Michael Seaman, TA

# License
This project is licensed under the MIT License - see the LICENSE file for details.







