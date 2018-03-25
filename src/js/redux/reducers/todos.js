/* Reducers:
  1) Take in an action and a copy of the current state.
  2) Peform operations to update the current state.
  3) Return an updated copy of the state.
*/

function todos(state = [], action) {
  let newState;
  switch (action.type) {
    case 'ADD_TODO':
      newState = addTodo(state, action.payload);
      break;
    case 'REMOVE_TODO':
      newState = removeTodo(state, action.payload);
      break;
    case 'COMPLETE_TODO':
      newState = completeTodo(state, action.payload);
      break;
    default:
      newState = state;
  }
  return newState;
}

function removeTodo (state, payload) {
  return state.filter(todo => todo.id !== payload.id);
}
function addTodo (state, payload) {
  return [...state, payload];
}
function completeTodo (state, payload) {
  return state.map((todo) => {
    const newTodo = Object.assign({}, todo);
    if (newTodo.id === payload.id) {
      newTodo.completed = true;
    }
    return newTodo;
  });
}

export default todos;
