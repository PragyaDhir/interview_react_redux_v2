import { combineReducers } from 'redux';
import { imageReducer } from './reducer';

const reducers = combineReducers({
    items: imageReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;