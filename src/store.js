import { createStore } from 'redux';
 
import reducers from './reducers';

//precisamos passar nosso reducer dentro do createStore
const store = createStore(reducers);

export default store;