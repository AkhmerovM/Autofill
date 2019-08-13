import {MainApi} from '../../../api/main-api'
import {getNameCities} from "../normalizers";

const actionSetDataSet = (data) => {
    return {
        payload: data,
        type: "SET_DATA_SET"
    }
};

const getDataSet = (url) => {
    return async (dispatch) => {
        const {data, errors} = await MainApi.getDataSet(url);
        console.log(data);
        if (!errors.length) {
            dispatch(actionSetDataSet(getNameCities(data)))
        }
    }
};
export {getDataSet}