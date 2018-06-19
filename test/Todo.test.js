import React from 'react';
import { shallow } from 'enzyme';
import { Todo,styleForTodoContent } from '../src/components/Todo';
global.td =require('testdouble');

describe('styleForTodoContent',()=>{
    it('should return content in strike tag for true status',()=>{
        expect(styleForTodoContent(true,'sample')).toEqual(<strike>sample</strike>);
    });

    it('should return content without any tag for false status',()=>{
        expect(styleForTodoContent(false,'sample')).toEqual('sample');
    });
});

describe('Todo',()=>{
    it('should have todo-details class',()=>{
        let component = shallow(<Todo details={{isDone:false,text:'sample',stars:2}}/>);
        expect(component.find('.todo-details')).toHaveLength(1);
    });

    it('should have todo-content and todo-stars class',()=>{
        let component = shallow(<Todo details={{isDone:false,text:'sample',stars:2}}/>);
        expect(component.find('.todo-content')).toHaveLength(1);
        expect(component.find('.todo-stars')).toHaveLength(1);
    });

    it('should call onClick function when click on todo',()=>{
        const toggleTodo = td.func();
        let component = shallow(<Todo details={{isDone:false,text:'sample',stars:2}} onClick={toggleTodo}/>);
        component.find('li').simulate('click');
        td.verify(toggleTodo(),{times:1});
    });

    it('should have given stars',()=>{
        let component = shallow(<Todo details={{isDone:false,text:'sample',stars:2}}/>);
        expect(component.find('.todo-stars').children()).toHaveLength(2);
    });
});