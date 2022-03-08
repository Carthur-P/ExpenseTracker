import { combineReducers } from 'redux';
import transactionReducer from './transactionReducers';

export const reducers = combineReducers({ 
    transaction: transactionReducer 
});