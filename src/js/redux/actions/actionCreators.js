function addTodo(payload) {
  return {
    type: 'ADD_TODO',
    payload
  };
}

function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    payload: {
      id
    }
  };
}

function completeTodo(id) {
  return {
    type: 'COMPLETE_TODO',
    payload: {
      id
    }
  };
}

export {
  completeTodo,
  removeTodo,
  addTodo
};