import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';

const rootReducer = combineReducers({
    cashReducer,
    customerReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));