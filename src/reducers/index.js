import { combineReducers } from 'redux';
// Expostando todos os reducers combinados com combineReducers.

import todos from './todos';

export default combineReducers ({
    todos,
});