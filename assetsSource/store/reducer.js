import {mainModuleName} from "../modules/main/constansts";
import {mainReducer} from "../modules/main/reducers";
import {combineReducers} from "redux";

export default combineReducers({
    [mainModuleName]: mainReducer,
})