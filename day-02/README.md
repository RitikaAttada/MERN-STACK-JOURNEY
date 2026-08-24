# Day 02 — React Components & Props ⚛️

Day 02 of my **MERN Stack Journey** focused on understanding the fundamentals of React components, JSX, and props.



## 🧩 Components

React applications are built using reusable components.

I created separate components for different parts of the application:

### `Header`

Displays the application heading.

```jsx
function Header(){
  return (
    <>
      <>My React App</>
      <br/>
    </>
  );
}
```

### `Welcome`

Displays a welcome message.

```jsx
function Welcome(){
  return(
    <>Welcome to react</>
  );
}
```

### `Student`

A reusable component that receives student information through props.

```jsx
function Student({name, branch, year}){
  return(
    <>
      <br/>
      <>Name: {name}</>
      <br/>
      <>Branch: {branch}</>
      <br/>
      <>year: {year}</>
      <br/>
    </>
  );
}
```

---

## 🧠 JSX

JSX allows HTML-like syntax to be written inside JavaScript.

I also practiced using JavaScript variables inside JSX:

```jsx
const name = "Ritika";

return (
  <>
    hello {name}
  </>
);
```

The `{}` syntax allows JavaScript expressions to be evaluated inside JSX.

---

## 📦 Props

Props are used to pass data from a parent component to a child component.

For example:

```jsx
<Student name="Ritika" branch="CSE" year={4}/>
```

Here:

* `name` → `"Ritika"`
* `branch` → `"CSE"`
* `year` → `4`

The `Student` component receives these values through props.

---

## ✨ Props Destructuring

Instead of accessing values using:

```jsx
props.name
props.branch
props.year
```

I practiced destructuring props directly in the component parameter:

```jsx
function Student({name, branch, year}) {
  // ...
}
```

This makes the component cleaner and easier to read.

---

## ♻️ Reusable Components

The `Student` component is reusable.

The same component can display different students simply by passing different props:

```jsx
<Student name="Ritika" branch="CSE" year={4}/>
<Student name="Khyathi" branch="CSD" year={3}/>
<Student name="Lalitha" branch="CSM" year={3}/>
```

This demonstrates one of the main advantages of React:

> **Create a component once and reuse it with different data.**

---

## 🌳 Component Structure

The application currently follows this structure:

```text
App
├── Header
├── Welcome
├── Student
├── Student
└── Student
```

The `App` component acts as the parent and renders the other components.

The `Student` components receive their data from `App` through props.

```text
             App
              │
       ┌──────┼────────┐
       ↓      ↓        ↓
    Header  Welcome  Student
                       │
                    Props
                       │
              ┌────────┼────────┐
              ↓        ↓        ↓
            name     branch    year
```

---

## 💻 Complete Code

```jsx
import { useState, useEffect } from "react";

function Header(){
  return (
    <>
      <>My React App</>
      <br/>
    </>
  );
}

function Welcome(){
  return(
    <>Welcome to react</>
  );
}

function Student({name, branch, year}){
  return(
    <>
      <br/>
      <>Name: {name}</>
      <br/>
      <>Branch: {branch}</>
      <br/>
      <>year: {year}</>
      <br/>
    </>
  );
}

function App(){
  return(
    <>
      <Header/>
      <Welcome/>
      <Student name="Ritika" branch="CSE" year={4}/>
      <Student name="Khyathi" branch="CSD" year={3}/>
      <Student name="Lalitha" branch="CSM" year={3}/>
    </>
  );
}

export default App;
```

> **Note:** `useState` and `useEffect` are imported in this file but are not used yet. They will be covered in upcoming React lessons.

---

## 🎯 Key Takeaways

### Component

> A reusable piece of UI.

### JSX

> A syntax that allows us to describe UI using HTML-like syntax inside JavaScript.

### Props

> Data passed from a parent component to a child component.

### Props Destructuring

> Extracting values directly from the props object.

### Reusability

> The same component can be rendered multiple times with different props.

### Data Flow

```text
Parent
  ↓
Props
  ↓
Child
```

---

## 🚀 Next Step

### Day 03 — State & Interactivity

Topics to learn next:

* [ ] `useState`
* [ ] State vs Props
* [ ] Updating state
* [ ] Re-rendering
* [ ] Event handlers
* [ ] `onClick`
* [ ] `onChange`
* [ ] Building interactive components

---

**MERN Stack Journey — Day 02 completed ✅**
