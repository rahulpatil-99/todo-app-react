import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { Todos } from '../components/Todos';

const sort = (todos)=>{
    let flag;
    for (let index = 0; index < todos.length-1; index++) {
        for (let index1 = index+1; index1 < todos.length; index1++) {
            if(todos[index].stars<todos[index1].stars){
                flag = todos[index];
                todos[index]=todos[index1];
                todos[index1]=flag;
            }
        }  
    } 
}

const mapStateToProps = state =>{
    sort(state);
    return {
    todos:state
}};

const mapDispatchToProps = dispatch =>({
    onTodoClick: (id) => {
    dispatch(toggleTodo(id))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos)

