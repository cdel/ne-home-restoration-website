import React from 'react';
import PropTypes from 'prop-types';
import Todo from '_components/Todo/Todo';

const TodoList = (props) => {
  return (
    <div className="TodoList">
      <h2>{props.header}</h2>
      <ul>
        {props.todos.map((todo) => {
            return (<Todo key={todo.id} {...todo} onComplete={props.onCompleteTodo(todo.id)} onDelete={props.onDeleteTodo(todo.id)} />);
        })}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  header: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired
};

export default TodoList;