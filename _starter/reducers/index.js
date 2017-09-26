import { combineReducers } from 'redux';

import bookList from '../data/books';

const initialState = bookList;
console.log(initialState);
//console.log(initialState);
//state argument isnt application state, only state that reducer is responsible for

//STATE = NULL es6 syntax that says if state comes in undefined, it becomes null by default...
//b/c redux does not allow to return undefined
const ActiveBook = (state = null, action) => {
  switch(action.type) {
    case 'BOOK_SELECTED':
    return action.payload
  }
  return state;

}

// can never return a mutated state in reducers..must be fresh state or original
//because we dont have a selected book right off the bat, we get an error


const rootReducer = combineReducers({
  books: initialState,
  activeBook: ActiveBook,
});

export default rootReducer;
