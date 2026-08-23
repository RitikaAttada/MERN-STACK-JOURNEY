# Day 01 — MERN Stack Journey 🚀

This is **Day 01** of my MERN Stack learning journey.

The goal of this series is to learn and practice MERN concepts every day, build small features/projects, and document my progress through GitHub.

## 📚 What I Learned Today

### React

* Created a React application using Create React App
* Learned `useState`
* Learned `useEffect`
* Used `fetch()` to make requests from React
* Displayed backend data in a React component

### Node.js + Express

* Created an Express server
* Created a GET API endpoint
* Learned how `res.send()` works
* Used `cors`
* Connected the React frontend to the Express backend

### Frontend ↔ Backend Communication

The basic flow I learned today:

```text
React Frontend
      ↓
    fetch()
      ↓
Express Backend
      ↓
   API Response
      ↓
React Frontend
```

I connected my React frontend running on:

```text
http://localhost:3000
```

to my Express backend running on:

```text
http://localhost:5000
```

## 🛠️ Commands Used

### Create the React App

```bash
npx create-react-app frontend
```

### Go into the frontend

```bash
cd frontend
```

### Start the React development server

```bash
npm start
```

React runs on:

```text
http://localhost:3000
```

---

## Backend Setup

Create the backend folder:

```bash
mkdir backend
cd backend
```

Initialize a Node.js project:

```bash
npm init -y
```

Install Express and CORS:

```bash
npm install express cors nodemon
```

If using ES Modules, add this to `package.json`:

```json
"type": "module"
```

Run the backend:

```bash
node server.js
```

The backend runs on:

```text
http://localhost:5000
```

## 📡 API Created

### GET `/`

The backend sends a plain-text response:

```js
app.get("/", (req, res) => {
    res.send("hello everyone nice to meet you :-)");
});
```

Since `res.send()` sends plain text, React reads it using:

```js
fetch("http://localhost:5000/")
    .then(res => res.text())
    .then(data => setMessage(data));
```

## 🔄 `res.send()` vs `res.json()`

### `res.send()`

Backend:

```js
res.send("Hello!");
```

Frontend:

```js
res.text()
```

The frontend receives:

```text
Hello!
```

### `res.json()`

Backend:

```js
res.json({
    message: "Hello!"
});
```

Frontend:

```js
res.json()
```

The frontend receives:

```js
{
    message: "Hello!"
}
```

and we can access it using:

```js
data.message
```

## ⚛️ React Concepts

### `useState`

```js
const [message, setMessage] = useState("");
```

`message` stores the current state.

`setMessage()` updates the state.

### `useEffect`

```js
useEffect(() => {
    fetch("http://localhost:5000/")
        .then(res => res.text())
        .then(data => setMessage(data));
}, []);
```

## 🌐 CORS

Because the frontend and backend run on different ports:

```text
Frontend → localhost:3000
Backend  → localhost:5000
```

I enabled CORS in Express:

```js
import cors from "cors";

app.use(cors());
```

This allows the frontend to communicate with the backend during development.

## ▶️ How to Run the Project

Open **Terminal 1**:

```bash
cd frontend
npm start
```

Open **Terminal 2**:

```bash
cd backend
nodemon server.js
```

Then open:

```text
http://localhost:3000
```

The React frontend fetches the message from the Express backend and displays it.

## 🧠 Day 01 Takeaway

Today I learned how the two main parts of a MERN application communicate:

```text
React
  ↓
HTTP Request
  ↓
Express API
  ↓
HTTP Response
  ↓
React
```

**Day 01 completed ✅**
