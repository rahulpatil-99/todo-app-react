import React from 'react';
import { shallow } from 'enzyme';
import { Todos } from '../src/components/Todos';

describe('Todos',()=>{
    it('should render no todos for empty todo list',()=>{
        const component = shallow(<Todos todos={[]}/>);
        expect(component.find('ul').text()).toBe('no todo');
    });

    it('should render todos for todo list',()=>{
        const todos = [
            {id:1,text:"Exercise regulary in morning",isDone:false,stars:3}
        ];
        const component = shallow(<Todos todos={todos}/>);
        expect(component.find("todos")).toBeTruthy();
    });

    it('should render given todos',()=>{
        const todos = [
            {id:1,text:"Exercise regulary in morning",isDone:false,stars:3},
            {id:2,text:"Complete assignment on time",isDone:false,stars:5}
        ];
        const component = shallow(<Todos todos={todos}/>);
        expect(component.find('Todo')).toHaveLength(2);
        expect(component.find('Todo').first().props().details.id).toBe(1);
        expect(component.find('Todo').first().props().details.stars).toBe(3);
        expect(component.find('Todo').first().props().details.text).toBe("Exercise regulary in morning");
        expect(component.find('Todo').first().props().details.isDone).toBe(false);
    });
    
});