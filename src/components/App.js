import React from 'react';
import TodoList from '../containers/TodoList';
import AddTodo from '../containers/AddTodo';

export class App extends React.Component{
    render(){
        return (
            <div>
                <AddTodo />
                <TodoList />
            </div>
        );
    };
};