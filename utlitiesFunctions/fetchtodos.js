// Define the fetchTodos utility function

const { default: fetch } = require("node-fetch");

// Define the fetchTodos action creator function

const fetchTodos = async (dispatch, getState) => {
  // Define the API endpoint URL
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=5";
  // Make an asynchronous GET request to the API endpoint
  const response = await fetch(url);
  // Extract the JSON data from the response body
  const todoData = await response.json();
  // Dispatch an action to update the Redux store with the fetched data
  dispatch({
    type: "allTodo/todoLoaded",
    payload: todoData,
  });
  // Log the number of todos in the state to the console
  console.log(`Number of todos: ${getState().allTodo.length}`);
};

module.exports = { fetchTodos };
