import { combineReducers } from "redux";
import changeState  from "./changeState";


const rootReducer = combineReducers({
    reducer:changeState
});

export default rootReducer;