import React from 'react';
import { render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import { App } from './components/App';


const initialState = [
    {id:1,text:"Exercise regulary in morning",isDone:false,stars:3},
    {id:2,text:"Complete assignment on time",isDone:false,stars:5}
];
  

const store = createStore(reducer);

render(
    <Provider store={ store }>
        <App />
    </Provider>,
  document.getElementById('root')
);