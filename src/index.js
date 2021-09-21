import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import {createStore} from "redux";
import {todosReducer} from './Redux/Reducers/todosReducer'
 import {Provider} from "react-redux";


 const store= createStore(todosReducer ,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  
<Provider store={store}>

    <App />

</Provider>
 ,
  document.getElementById('root')
);

