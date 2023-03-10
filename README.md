# Redux-Thunk

Understanding how Redux thunk works in core javascript

Redux Thunk is a middleware that allows you to write action creators that return functions instead of plain objects. These functions can then perform asynchronous operations before dispatching the actual action. This is useful when you need to fetch data from an API or perform other side effects before updating the state.

To use Redux Thunk, you need to apply it as middleware to your Redux store. I have done it on my code.

In this code, we import the redux-thunk middleware and apply it to the store using applyMiddleware. We also rename the fetchTodos function to fetchTodosAction and modify it to return a function instead of an object.

The new fetchTodosAction function takes no arguments and returns a function that takes a dispatch argument. This inner function performs the asynchronous operation to fetch the todos, dispatches the todosLoaded action with the fetched data as the payload, and logs the number of todos to the console.

When we dispatch fetchTodos(), Redux Thunk intercepts it and calls the fetchTodosAction function. Since this function returns a function instead of an object, Redux Thunk calls it with the dispatch function as an argument. The inner function then executes the asynchronous operation and dispatches the actual action when it's done.

## STEPS HOW THUNK WORK

#### Here are the steps that occur when using a thunk function to dispatch an asynchronous action in Redux:

- An action is dispatched by calling a function that returns another function, rather than a plain object. This function is the "thunk" function.

- The thunk function is called with two arguments: the dispatch function and the getState function. These functions are provided by Redux and can be used inside the thunk to dispatch actions and get the current state of the store, respectively.

- Inside the thunk function, an asynchronous operation is performed, such as making an API request using fetch or axios.

- While the asynchronous operation is in progress, the thunk function can dispatch other actions to indicate that the operation has started or that an error has occurred.

- Once the asynchronous operation is complete, the thunk function dispatches another action with the result of the operation as its payload.

- The Redux middleware intercepts this action and passes it on to the reducer.

- The reducer updates the store's state based on the action, just like any other action.

# How its working on my code

Here's how the thunk middleware works in my code:

- When the fetchTodos action is dispatched, it is a function that returns another function, which is the actual action that will be dispatched. This returned function is the thunk function.

- The thunk function takes two arguments, dispatch and getState, which are provided by the Redux middleware.

- Inside the thunk function, an asynchronous operation is performed to fetch data from an API using fetch.

- While the asynchronous operation is in progress, the thunk function can dispatch other actions to indicate that the operation has started.

- Once the asynchronous operation is complete, the thunk function dispatches another action with the result of the operation as its payload.

- The Redux middleware intercepts this action and passes it on to the reducer.

- The reducer updates the store's state based on the action, just like any other action.

I hope this helps you understand how Redux Thunk works and how to use it with core JavaScript.
