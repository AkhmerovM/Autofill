import {autofillModuleName} from "../constansts";

function selectAutoFillModuleName (state) {
    return state[autofillModuleName];
}
function selectAutoFillModuleData (state) {
    return selectAutoFillModuleName(state).data;
}
export {selectAutoFillModuleData}