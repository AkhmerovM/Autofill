import {combineReducers} from "redux";
import {autofillReducer} from "../modules/autofill/reducers";
import {autofillModuleName} from "../modules/autofill/constansts";

export default combineReducers({
    [autofillModuleName]: autofillReducer,
})