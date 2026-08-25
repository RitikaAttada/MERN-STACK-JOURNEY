# Day 03 — React Fundamentals

This folder contains my **Day 03 React practice** as part of my **MERN Stack Journey**.

The goal of Day 03 is to understand the fundamentals of React and learn how React components manage and display dynamic data.

## Topics Covered

* React Components
* JSX
* Reusable Components
* Props
* `children` prop
* Component Composition
* `useState`
* State Updates
* Event Handling
* Conditional Rendering
* Ternary Operators
* Controlled Inputs

## Practice Components

### 1. Counter

A simple counter demonstrating:

* `useState`
* Incrementing state
* Decrementing state
* Button event handling

### 2. Like

A like button demonstrating:

* Boolean state
* Toggling state
* Functional state updates
* Conditional rendering

### 3. NameInput

A name input demonstrating:

* String state
* Input events
* `event.target.value`
* Dynamically displaying user input

### 4. ProfileCard

A reusable component demonstrating:

* `children`
* Component composition
* Reusing the same component with different content

## Key Learning

React components can maintain their own state and automatically re-render when that state changes.

The `children` prop allows a component to receive and render content placed between its opening and closing tags.

```jsx
<ProfileCard>
  <p>Ritika</p>
  <p>CSE Student</p>
</ProfileCard>
```

This allows the same component to be reused with different content.


**Day 03 Status: React Fundamentals — In Progress 🚀**
