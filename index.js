const { createStore, applyMiddleware } = require("redux");
const { delayActionMiddleware, fetchAsyncMiddleware } = require("./middlewares");
const { fetchTodos } = require("./utlitiesFunctions/fetchtodos");
// initial state

const initialState = {
  allTodo: [],
};

// reducer

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "allTodo/todoAdded":
      return {
        ...state,
        allTodo: [...state.allTodo, { title: action.payload }],
      };
    case "allTodo/todoLoaded":
      return { ...state, allTodo: [...state.allTodo, action.payload] };

    default:
      break;
  }
};

// store

const store = createStore(
  todoReducer,
  applyMiddleware(delayActionMiddleware, fetchAsyncMiddleware)
);

// subscribe to state changes

store.subscribe(() => {
  console.log(store.getState().allTodo);
});

// dispatch actions

// store.dispatch({
//   type: "allTodo/todoAdded",
//   payload: "Learn more about redux",
// });
store.dispatch(fetchTodos);
