# Day-07: Using promises

A promise is an object returned by an asynchronous function which represents the state of the operation

The promise object provides methods to handle the eventual success or failure of the operation

with a promise-based API, the asynchronous function starts the operation and returns a promise object.

## fetch API:

calling the fetch() API, and assigning the return value to the fetchPromise variable
immediately after, logging the fetchPromise variable. This should output something like: Promise { <state>: "pending" }, telling us that we have a Promise object, and it has a state whose value is "pending". The "pending" state means that the fetch operation is still going on.
passing a handler function into the Promise's then() method. When (and if) the fetch operation succeeds, the promise will call our handler, passing in a Response object, which contains the server's response.
logging a message that we have started the request.

## Chaining promises
with the fetch() API, once you get a response object, you need to call another function to get the response data, such as json() method. this method is also asynchronous.

One might think that this is similar to callback hell , however then feature itself returns a new promise that is fulfilled with the return value of callback function

This is called promise chainig , we can decrease the ever increasing levels of indentation

## Error handling

To support error handling, promise object supports a catch() method. catch() is called when the asynchronous operation fails. It should be added at the end of the promise chain. this could be the single place to handle all errors


## Promise Terminology
1. Pending
2. Fulfilled
3. rejected
4. Completed
5. resolved

## Combining multiple promises
There are other ways to combine asynchronous function calls, and the promise API provides helpers for them.

Sometimes you need all promises to be fulfilled and they dont depend on each other, in such cases, it is much more efficient to start them all off together, then be notified when all of them have fulfilled. here Promise.all() method is used.

Promise.any() is used if we want any of the promise from the array to be fulfilled.

## async and await

The async keyword gives us a simpler way to work with asynchronous promise based code. Adding async at the start of the function makes it async function.

Inside async function we can use await keyword before a call to a function that returns a promise.

This makes teh code wait at the point until the promise is settled, This enables us to write code that uses asynchronous function but looks like synchronous code.

The async functions always return a promise and we can only use await inside of an asynch function