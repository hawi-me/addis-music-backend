# addis-music-backend

A Node.js/Express backend application for managing a collection of songs, built with MongoDB for data storage. This project provides basic CRUD operations for song entries, excluding album cover and audio file uploads due to time constraints.

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Development](#development)

---

## Features

- Create, read, update, and delete song entries.
- Store song data (title, artist, album, year) in a MongoDB database.
- Pagination support for retrieving song lists.
- Basic error handling and validation.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later)
- npm (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas)
- [Git](https://git-scm.com/) (for version control)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hawi-me/addis-music-backend/
   cd addis-music-backend
Install dependencies:

npm install
Create a .env file in the root directory and add your MongoDB connection string:

API Documentation
Base URL
Local: http://localhost:5000

Endpoints
GET /songs?page=1&limit=10
Retrieve a paginated list of songs.

Query Parameters:

page (optional): Page number (default: 1)

limit (optional): Number of items per page (default: 10)

Response:

json

{
  "songs": [],
  "currentPage": 1,
  "totalPages": 0,
  "totalSongs": 0
}
GET /songs/:id
Retrieve a single song by ID.

URL Parameters:

id (required): MongoDB ObjectId

Response (Success):

json

{
  "_id": "song_id",
  "title": "Song Title",
  "artist": "Artist Name",
  "album": "Album Name",
  "year": 2023,
  "createdAt": "timestamp"
}
Response (Not Found):

json

{ "message": "Song not found" }
POST /songs
Create a new song.

Request Body:

json
Copy
Edit
{
  "title": "Test Song",
  "artist": "Test Artist",
  "album": "Test Album",
  "year": 2023
}
Response (201 Created):

json
{
  "_id": "new_song_id",
  "title": "Test Song",
  "artist": "Test Artist",
  "album": "Test Album",
  "year": 2023,
  "createdAt": "timestamp"
}
PUT /songs/:id
Update a song by ID.

URL Parameters:

id (required): MongoDB ObjectId

Request Body:
json
{
  "title": "Updated Title",
  "artist": "Updated Artist",
  "album": "Updated Album",
  "year": 2024
}
Response (200 OK):

json
{
  "_id": "updated_song_id",
  "title": "Updated Title",
  "artist": "Updated Artist",
  "album": "Updated Album",
  "year": 2024
}
DELETE /songs/:id
Delete a song by ID.

URL Parameters:

id (required): MongoDB ObjectId

Response (200 OK):

json
Copy
Edit
{ "message": "Song deleted" }
Development
Start the MongoDB server locally (if you're not using MongoDB Atlas):


mongod
Run the development server:

npm run dev
