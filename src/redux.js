import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
  ],
  reducers: {
    addTask: (state, action) => {
      // {type: "todo/addTask", payload: "Finir le cours de Redux"}
      const newTask = {
        id: Date.now(),
        done: false,
        text: action.payload,
      };

      state.push(newTask);
    },
    toggleTask: (state, action) => {
      // {type: "todo/toggleTask", payload: 20}
      const task = state.find((t) => t.id === action.payload);
      task.done = !task.done;
    },
    deleteTask: (state, action) => {
      // {type: "todo/deleteTask", payload: 20}
      state = state.filter((t) => t.id !== action.payload);
      return state;
    },
  },
});

export const { addTask, deleteTask, toggleTask } = toDoSlice.actions;
export const store = configureStore({
  reducer: {
    todos: toDoSlice.reducer,
  },
});

// export const createToggle = (id) => {
//   return {
//     type: "todo/toggleTask",
//     payload: id,
//   };
// };
