import {autofillModuleName} from "modules/autofill/constansts";

function selectAutoFillModuleName (state) {
    return state[autofillModuleName];
}
function selectAutoFillModuleData (state) {
    return selectAutoFillModuleName(state).data;
}
function selectCountryList (state) {
    return selectAutoFillModuleData(state).country;
}
function selectCityList (state) {
    return selectAutoFillModuleData(state).city;
}export {selectCityList, selectCountryList}
