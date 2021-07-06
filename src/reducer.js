import { combineReducers } from "redux";
import todoReducer from './slice/todoSlice'

const rootReducer = combineReducers({
    todos: todoReducer
});
export default rootReducer;