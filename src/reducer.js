const reducer= (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO' : return [...state,{id:action.id, text:action.text, isDone:false, stars:action.stars}]
    case 'TOGGLE_TODO' :
    return state.map(todo =>
                        (todo.id===action.id) ? 
                        {id:todo.id, text:todo.text, isDone: !todo.isDone, stars:todo.stars} : todo
                        )
    default: return state
  }
};

export default reducer