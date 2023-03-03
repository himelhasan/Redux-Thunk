# Redux-Thunk

Understanding how Redux thunk works in core javascript

Redux Thunk is a middleware that allows you to write action creators that return functions instead of plain objects. These functions can then perform asynchronous operations before dispatching the actual action. This is useful when you need to fetch data from an API or perform other side effects before updating the state.

To use Redux Thunk, you need to apply it as middleware to your Redux store. I have done it on my code.

In this code, we import the redux-thunk middleware and apply it to the store using applyMiddleware. We also rename the fetchTodos function to fetchTodosAction and modify it to return a function instead of an object.

The new fetchTodosAction function takes no arguments and returns a function that takes a dispatch argument. This inner function performs the asynchronous operation to fetch the todos, dispatches the todosLoaded action with the fetched data as the payload, and logs the number of todos to the console.

When we dispatch fetchTodos(), Redux Thunk intercepts it and calls the fetchTodosAction function. Since this function returns a function instead of an object, Redux Thunk calls it with the dispatch function as an argument. The inner function then executes the asynchronous operation and dispatches the actual action when it's done.

I hope this helps you understand how Redux Thunk works and how to use it with core JavaScript.
