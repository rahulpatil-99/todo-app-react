import React from 'react';

const spanStyle={
    'padding-left':'30px'
};

export const styleForTodoContent=(status,content)=> status ? <strike>{content}</strike> : content;

export class Todo extends React.Component{
    getStars(){
        const {details} = this.props;
        let stars=[];
        for(let i=1;i<=details.stars;i++){
                stars.push(<span>&#x2b50;</span>);
        };
        return stars;
    }
    render(){
        const { details,onClick } = this.props;
        let content = styleForTodoContent(details.isDone,details.text);
        const allStars = this.getStars();
        return (
            <li onClick={onClick} >
                <h1 className="todo-details">
                    <span className="todo-content" style={spanStyle}>{content}</span>
                    <span className="todo-stars">{allStars}</span>
                </h1>
            </li>
        );
    }
}