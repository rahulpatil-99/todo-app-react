import React from 'react';
import { Todo } from './Todo';

const divstyle = {
    height:'100%',
    width:'100%',
    margin:'5%'
}
export class  Todos extends React.Component{
    render(){
        const { todos, onTodoClick } = this.props;
        if(todos.length===0) {
            return <ul>no todo</ul>;
        }
        return (
            <div className="todos" style={divstyle}>
                <ul>
                    {todos.map(todo => 
                    <Todo 
                    details={todo} 
                    onClick={()=>onTodoClick(todo.id)} 
                    />
                    )}
                </ul>
            </div>
        );
    }
};