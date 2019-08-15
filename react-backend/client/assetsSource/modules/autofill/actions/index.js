import {MainApi} from 'api/main-api'

const actionSetCityList = (data) => {
    return {
        payload: data,
        type: "SET_CITY_LIST"
    }
};
const actionSetCountyList = (data) => {
    return {
        payload: data,
        type: "SET_COUNTRY_LIST"
    }
};
const getCityList = (url) => {
    return async (dispatch) => {
        const {data, errors} = await MainApi.getCityList(url);
        if (!errors.length) {
            dispatch(actionSetCityList(data));
        }
    }
};
const getCountryList = (url) => {
    return async (dispatch) => {
        const {data, errors} = await MainApi.getCountryList(url);
        if (!errors.length) {
            dispatch(actionSetCountyList(data));
        }
    }
};export {getCityList, getCountryList}
