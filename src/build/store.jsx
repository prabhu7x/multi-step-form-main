// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from './process/redux/AppSlice'

// export const store = configureStore({
//     reducer: {
//         user: userReducer
//     }
// })

// localStorage implementation for persisted state
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './process/redux/AppSlice'

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("userState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("userState", serializedState);
  } catch (e) {
    console.log(e)
  }
};

export const store = configureStore({
  reducer: {
    user: userReducer
  },
  preloadedState: {
    user: loadState() || undefined,
  }
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  saveState(store.getState().user);
});