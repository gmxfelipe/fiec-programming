import React, { Component } from 'react';

import { Provider } from 'react-redux';
// O provider vai forçar a renderização dos components dentro do state  

import store from './store';
import TodoList from './TodoList';


function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
