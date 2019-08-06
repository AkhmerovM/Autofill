import {MainApi} from '../../../api/main-api'

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
            dispatch(actionSetDataSet(data))
        }
    }
};
export {getDataSet}