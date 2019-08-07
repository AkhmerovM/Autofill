import {MainApi} from '../../../api/main-api'
import {getNameCities} from "../normalizers";

const actionSetDataSet = (data) => {
    return {
        payload: data,
        type: "SET_DATA_SET"
    }
};

const getDataSet = () => {
    return async (dispatch) => {
        const {data, errors} = await MainApi.getDataSet();
        if (!errors.length) {
            dispatch(actionSetDataSet(getNameCities(data)))
        }
    }
};
export {getDataSet}