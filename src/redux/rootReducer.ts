import { combineReducers ,configureStore  } from "@reduxjs/toolkit";
import { usersReducer } from "./usersReducer";


const rootReducer = combineReducers({
    users: usersReducer.reducer
});

export default rootReducer;