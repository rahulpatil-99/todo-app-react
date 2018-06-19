import React from 'react';
import {Stars} from './Stars';

const formStyle={
    'font-size':'40px' 
};

const inputStyle={
    height: '30px',
    width: '300px',
    border: 'solid black 1px'
}

export class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todoText:'',
            stars:0
        };
        this.handleTodoText = this.handleTodoText.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handleStar = this.handleStar.bind(this);
    }
    submitForm(event){
        event.preventDefault();
        const { saveTodo } = this.props;
        saveTodo(this.state.todoText,this.state.stars);
        this.setState({todoText:'',stars:0});   
    }
    handleTodoText(e){
        this.setState({ todoText: e.target.value });
    }
    handleStar(countOfStars){
        this.setState({stars:countOfStars});
    }

    render(){ 
        return(
            <form onSubmit={this.submitForm} style={formStyle} className="add-todo-form">
                <label>
                    Todo:
                    <input type="text" name="todotext" 
                    onChange={this.handleTodoText} 
                    value={this.state.todoText} 
                    style={inputStyle}
                    className="todo-content-input"
                    required />
                </label>
                <Stars stars={this.state.stars} captureStar={this.handleStar}/>
                <input type="submit" value="submit" className="add-todo-submit" />
             </form>
        );
    };
};