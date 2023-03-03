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

const asyncDataLoadMiddleware = (store) => (next) => async (action) => {
  if (action.type == "allTodo/fetchTodo") {
    return;
  }

  return next(action);
};

module.exports = { delayActionMiddleware, asyncDataLoadMiddleware };
