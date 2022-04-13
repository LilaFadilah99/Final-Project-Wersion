import { combineReducers } from "redux";
import userReducer from "./userReducer";
import servisesReducer from "./servisesReducer";


export default combineReducers({
    userReducer: userReducer,
    servisesReducer: servisesReducer,
   
})