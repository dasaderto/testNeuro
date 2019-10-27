import {combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import recordsReducer from "./recordsReducer";
import errorsReducer from "./errorsReducer";
const rootReducer = combineReducers({
    records: recordsReducer,
    errors: errorsReducer
});

export const store = createStore(rootReducer,applyMiddleware(thunk));

