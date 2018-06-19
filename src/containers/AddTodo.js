import { connect } from 'react-redux';
import { AddTodo } from '../components/AddTodo';
import {addTodo} from '../actions';

const mapDispatchToPros = dispatch =>({
    saveTodo: (text,stars)=> {
        dispatch(addTodo(text,stars));
    },
});

export default connect(
    null,
    mapDispatchToPros
)(AddTodo);
