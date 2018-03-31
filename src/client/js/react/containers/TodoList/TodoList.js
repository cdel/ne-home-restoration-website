import {getCompletedTodos, getActiveTodos} from '_selectors/todo_selectors';
import {removeTodo, completeTodo} from '_actions/actionCreators';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TodoList from '_components/TodoList/TodoList';

function mapStateToProps(state, containerProps) {
  return {
      header: containerProps.header,
      todos: containerProps.completed ? getCompletedTodos(state) : getActiveTodos(state)
  };
}

function mapDispatchToProps(dispatch, state) {
  return {
    onDeleteTodo(id) {
      return ((e) => {
        dispatch(removeTodo(id));
      });
    },
    onCompleteTodo(id) {
      return ((e) => {
        dispatch(completeTodo(id));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);