import { combineReducers } from 'redux';
import { itemReducer } from './reducers/itemReducer';

const reducers = combineReducers({
    items: itemReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;