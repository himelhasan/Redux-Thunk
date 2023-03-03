// Import Redux functions and middlewares

const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
// const { delayActionMiddleware, fetchAsyncMiddleware } = require("./middlewares");
// deleted as using the redux thunk

// Import the fetchTodos utility function
const { fetchTodos } = require("./utlitiesFunctions/fetchtodos");

// Define the initial state of the store
const initialState = {
  allTodo: [],
};

// Define the reducer function
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "allTodo/todoAdded":
      return {
        ...state,
        allTodo: [...state.allTodo, { title: action.payload }],
      };
    case "allTodo/todoLoaded":
      return { ...state, allTodo: [...state.allTodo, action.payload] };
    // The reducer should return the current state by default
    default:
      break;
  }
};

// Create the store and apply the middlewares
const store = createStore(todoReducer, applyMiddleware(thunk));
// applyMiddleware(delayActionMiddleware, fetchAsyncMiddleware) // deleted as using the redux thunk

// subscribe to state changes

store.subscribe(() => {
  console.log(store.getState().allTodo);
});

// dispatch actions

// store.dispatch({
//   type: "allTodo/todoAdded",
//   payload: "Learn more about redux",
// });

// Dispatch the fetchTodos action, which is a thunk function
store.dispatch(fetchTodos);
