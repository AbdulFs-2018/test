export const ADD_TODO = 'ADD_TODO'

let nextTodoId = 0;

export function addTodo(text) {
   return {
      type: ADD_TODO,
      id: nextTodoId++,
      text
   };
}


{/*  *Actions are JavaScript objects that use type property
     to inform about the data that should be sent to the store.
     *We are defining ADD_TODO action that will be used for adding new item to our list.
     *The addTodo function is an action creator that returns our action and sets an id for every created item. 
*/}