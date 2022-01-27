import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

import { composeWithDevTools } from 'redux-devtools-extension';

const middleware:any = [];

if(process.env.NODE_ENV === 'development'){
    const {createLogger}= require('redux-logger');
    const logger = createLogger({
        level:'info',
        collapsed:true
    })
    // console.log("Logger");
    middleware.push(logger);
}

export const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware )=> getDefaultMiddleware().concat(...middleware)
})

export type IStateReduced = ReturnType<typeof store.getState>;
export type IAppDispatch  = typeof store.dispatch;

       