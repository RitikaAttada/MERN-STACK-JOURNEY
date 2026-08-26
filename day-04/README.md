# Day 04 — Express REST API & CRUD

Today I learned how to build **RESTful APIs using Express.js** and perform CRUD operations.

## Topics Covered

* Express.js setup
* Creating an Express server
* REST API fundamentals
* HTTP methods: `GET`, `POST`, `PUT`, `DELETE`
* CRUD operations
* Route parameters
* Request body with `express.json()`
* HTTP status codes
* Error handling
* API testing with Postman

## Contents

### 📝 Task API — `server.js`

Built a Task API with CRUD functionality.

| Method | Endpoint     | Purpose             |
| ------ | ------------ | ------------------- |
| GET    | `/tasks`     | Get all tasks       |
| GET    | `/tasks/:id` | Get a specific task |
| POST   | `/tasks`     | Create a new task   |
| PUT    | `/tasks/:id` | Update a task       |
| DELETE | `/tasks/:id` | Delete a task       |

### 📚 Book API — `server2.js`

Built a second REST API to practice CRUD operations independently using a Book resource.

| Method | Endpoint     | Purpose                 |
| ------ | ------------ | ----------------------- |
| GET    | `/books`     | Get all books           |
| GET    | `/books/:id` | Get a specific book     |
| POST   | `/books`     | Add a new book          |
| PUT    | `/books/:id` | Update book information |
| DELETE | `/books/:id` | Delete a book           |

## Tech Used

* Node.js
* Express.js
* JavaScript
* Postman

## What I Learned

* How Express handles HTTP requests and responses
* How to create REST API routes
* How `req.params` is used to access route parameters
* How `req.body` is used to receive JSON data
* How CRUD operations work in an API
* How to return appropriate HTTP status codes
* How to handle resources that don't exist
* How to test API endpoints using Postman

## Day 04 Checklist

* [x] Create an Express server
* [x] Create a POST route
* [x] Create GET routes
* [x] Create a PUT route
* [x] Create a DELETE route
* [x] Handle route parameters
* [x] Handle JSON request bodies
* [x] Implement CRUD operations
* [x] Add basic error handling
* [x] Test APIs using Postman
* [x] Build a Task API
* [x] Build a Book API

---
