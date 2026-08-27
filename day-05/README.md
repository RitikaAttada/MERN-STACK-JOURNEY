# Day 05 — MongoDB & Mongoose

Focused on connecting MongoDB with an Express application and performing CRUD operations using Mongoose.

## Topics Covered

- MongoDB Atlas
- Connecting MongoDB to Express
- Mongoose
- Mongoose Schemas & Models
- MongoDB CRUD operations
  - Create
  - Read
  - Update
  - Delete
- Using `async/await` with database operations
- Working with MongoDB `_id`
- Express routes with Mongoose
- Testing API requests

## What I Built

Created a **Books REST API** using:

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv

### API Routes

| Method | Route | Operation |
|---|---|---|
| POST | `/books` | Create a book |
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get a specific book |
| PUT | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |

## Key Learning

Yesterday, CRUD operations were performed on a JavaScript array.

```text
Express → JavaScript Array → CRUD