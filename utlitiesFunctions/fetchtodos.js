const { default: fetch } = require("node-fetch");

const fetchTodos = async (dispatch, getState) => {
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=5";
  const response = await fetch(url);
  const todoData = await response.json();

  dispatch({
    type: "allTodo/todoLoaded",
    payload: todoData,
  });

  console.log(`Number of todo: ${getState().allTodo.length}`);
};

module.exports = { fetchTodos };
