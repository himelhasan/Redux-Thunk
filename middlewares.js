// Define the delayActionMiddleware and fetchAsyncMiddleware functions
const { default: fetch } = require("node-fetch");

const delayActionMiddleware = (store) => (next) => (action) => {
  if (action.type === "allTodo/todoAdded") {
    console.log("i am delaying your task");

    setTimeout(() => {
      next(action);
    }, 2000);

    return;
  }

  return next(action);
};

const fetchAsyncMiddleware = (store) => (next) => async (action) => {
  // Check if the action is a function (i.e., a thunk function)

  if (typeof action === "function") {
    // Call the thunk function with the dispatch and getState functions
    return action(store.dispatch, store.getState);
  }
  // If the action is not a function, pass it along to the next middleware
  return next(action);
};

// Export the middleware functions
module.exports = { delayActionMiddleware, fetchAsyncMiddleware };
