import React from 'react';

const initialState = {
    data: {}
};

const autofillReducer = (state = initialState, action) => {
    switch (action.type) {
        case ('SET_COUNTRY_LIST') :
            return {
                ...state,
                data: {
                    ...state.data,
                    "country" : action.payload,
                }
            };
        case ('SET_CITY_LIST') :
            return {
                ...state,
                data: {
                    ...state.data,
                    "city" : action.payload,
                }
            };
        default: return {...state};
    }
};
export {autofillReducer}
