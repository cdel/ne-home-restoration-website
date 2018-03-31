import { createSelector } from 'reselect';

const getTodos = state => state.todos;

const getCompletedTodos = createSelector([getTodos], todos => {
  return todos.filter(todo => todo.completed);
});

const getActiveTodos = createSelector([getTodos], todos => {
  return todos.filter(todo => !todo.completed);
});

export {
  getCompletedTodos,
  getActiveTodos
};