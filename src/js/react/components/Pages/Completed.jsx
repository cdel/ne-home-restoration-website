import React from 'react';
import TodoList from '_containers/TodoList/TodoList';

const CompletedTodos = (props) => {
  return (
      <TodoList header="Completed Todos" completed />
  );
}

export default CompletedTodos;