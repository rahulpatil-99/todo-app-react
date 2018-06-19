let nextTodoId=0;
export const addTodo = (text,stars) =>{
    nextTodoId++;
    return {
        type: "ADD_TODO",
        id:nextTodoId,
        text,
        stars
    }
};

export const toggleTodo = id =>{
    return {
        type: "TOGGLE_TODO",
        id
    }
};