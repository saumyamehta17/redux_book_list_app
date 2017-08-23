import { combineReducers } from 'redux';
import BookReducer from './reducer_book';
import BookSelectReducer from './reducer_book_select';

const rootReducer = combineReducers({
    books: BookReducer,
    book: BookSelectReducer
});

export default rootReducer;
