import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '_containers/TodoList/TodoList';
import AddTodo from '_containers/AddTodo/AddTodo';

const ActiveTodos = (props) => {
  return (
    <div>
      <AddTodo />
      <TodoList header="Active Todos" completed={false} />
    </div>
  );
}

export default ActiveTodos;