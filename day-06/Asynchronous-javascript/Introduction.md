# Introduction to asynchronous JavaScript

Asynchrounous programming is a technique that enables your program to start a potentially long-running task and still respond to other events while that task runs, rather than having to wait until the has has finished. once the task has finished, the program presents the result.  

Many functions used by browsers can pottentially take a long time, so they are asynchronous such as making http requests using fetch() and accesing a user's camera using getUserMedia()  

#### The trouble with long-running synchronous functions

long running synchrounous functions will not let the program complete any other task while the function is still being processed. The program becomes completely unresposive during this time.  

This is because Javascript is a single threaded programming language. Because the program consists of a single thread, it can only do one thing at a time   

so what we need is that 
   1. to have the function execute the long-running operation in a way that does not block the main thread 
   2. notify us with the result of the operation when it completes

That is precisely what asynchronous functions enable us to do.  

### Event Handlers

An event handler is a block of code that runs automatically when a specific event ocuurs in a program.

That is already an asynchronous behaviour

### Callbacks

An event handler is a particular type of callback. A callback is just a function that's passed onto an other function.Callbacks used to be a main way an asynchronous function is implemented in JavaScript.  

However callback code can get hard to understand when callback itself has to call functions that accept a callback. because we have callback inside callback we might end up with a deeply nested callback function, which is harder to read and debug. This is called **callback hell** and this is the reason why most modern asynchronous APIs don't use callbacks. Instead they use a **Promise**.  

### Promise:

Promises are the foundation of asynchronous programming in javascript. A promise is an object returned by an asynchronous function, which represents the current state of the operation.  

The promise object provides methods to handle the eventual success or failure of the operation.  

With a promise based API, the asyncronous function starts the operation and returns a promise object. you can attach handlers to this promise object, and these handlers will be executed based on the outcome of success or failure.


