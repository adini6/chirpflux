# Chirpflux

A Social Network API built with Express.js, MongoDB, and Mongoose. This API allows users to share their thoughts, react to friends' thoughts, and maintain a friend list.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [License](#license)
- [Questions](#questions)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Features

- User creation, updation, deletion
- Thought creation, updation, deletion
- Add and Remove Friends
- React to Thoughts
- View all users and thoughts

## Installation

Before starting, ensure you have Node.js installed on your system. Follow the steps below to set up the project:

1. Clone the repository:
   ```sh
   git clone <https://github.com/adini6/chirpflux.git>
   ```

2. Navigate to the project directory:
    ```sh
    cd <chirpflux>
    ```

3. Install the required npm packages:
    ```sh 
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. Use an API testing tool such as Insomnia or postman to add users, friends and thoughts. Test the different routes and methods listed following section.  

## API Routes
### User Routes
- GET /api/users - Retrieve all users.
- GET /api/users/:id - Retrieve a single user by their _id 
- POST /api/users - Create a new user.
- PUT /api/users/:id - Update a user by their _id.
- DELETE /api/users/:id - Remove a user by their _id.
#### Friend Routes
- POST /api/users/:userId/friends/:friendId - Add a new friend to a user's friend list.
- DELETE /api/users/:userId/friends/:friendId - Remove a friend from a user's friend list.
### Thought Routes
- GET /api/thoughts - Retrieve all thoughts.
- GET /api/thoughts/:id - Retrieve a single thought by its _id.
- POST /api/thoughts - Create a new thought.
- PUT /api/thoughts/:id - Update a thought by its _id.
- DELETE /api/thoughts/:id - Remove a thought by its _id.
#### Reaction Routes
- POST /api/thoughts/:thoughtId/reactions - Create a reaction stored in a single thought.
- DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Pull and remove a reaction by the reaction's reactionId value.

![insomnia](https://github.com/adini6/chirpflux/assets/28551058/9e3bcb1d-dee0-48bd-824f-bacb9ae5df2d)

Walkthrough video


## License 
Chirpflux is open-source software licensed under the MIT license.

## Questions 
if you have any questions or insights feel free to reach out to me via email or through my github profile: 
- [Github](https://github.com/adini6)
- [Email](adini18@gmail.com)



