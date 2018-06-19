import reducer from '../src/reducer';
import {addTodo,toggleTodo} from '../src/actions';

describe('Reducer: ',()=>{
    let state;
    beforeEach(()=>{
        state=[];
    });
    it('should return same state',()=>{
        expect(reducer(state,{})).toEqual(state);
    });
    it('should add todo to the given state ',()=>{
        let action = addTodo('sample',3);
        let expected = [{id:1,text:'sample',isDone:false,stars:3}];
        let actual = reducer(state,action);
        expect(actual).toEqual(expected);
    });
    it('should change isDone to not of isDone for toggleTodo',()=>{
        state = reducer(state,addTodo('read book',5));
        let action = toggleTodo(2);
        let expected=[{id:2,text:'read book',isDone:true,stars:5}];

        let newState = reducer(state,action);
        expect(newState).toEqual(expected);
    });
    it('should toggle the todo with given action id',()=>{
       state = reducer(state,addTodo('play cricket',2));
       state = reducer(state,addTodo('take break',3));
       let expected =  [ { id: 3, text: 'play cricket', isDone: false, stars: 2 },
                        { id: 4, text: 'take break', isDone: true, stars: 3 } ];
        let newState = reducer(state,toggleTodo(4));
        expect(newState).toEqual(expected);
    })
});