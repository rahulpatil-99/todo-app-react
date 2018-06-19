import {addTodo,toggleTodo} from '../src/actions';

describe('All Actions:',()=>{
    it('dummy test',()=>{
        expect(1+1).toBe(2);
    });
    it('should return action payload with type TOGGLE_TODO',()=>{
        const expected = {
            type:'TOGGLE_TODO',
            id:1
        };
        expect(toggleTodo(1)).toEqual(expected);
    });
    it('should return action payload with type ADD_TODO',()=>{
        const expected = {
            type: "ADD_TODO",
            id:1,
            text:'sample todo',
            stars:3
        };
        expect(addTodo('sample todo',3)).toEqual(expected);
    });
    it('should return incremented id for new addTodo action',()=>{
        const expected = {
            type: "ADD_TODO",
            id:2,
            text:'play game',
            stars:5
        };
        expect(addTodo('play game',5)).toEqual(expected);
    });
});