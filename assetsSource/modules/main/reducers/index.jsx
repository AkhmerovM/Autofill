import React from 'react';

const initialState = {};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ('SET_DATA_SET') :
            return {
                ...state,
                data: action.payload
            };
        default: return {...state};
    }
};
export {mainReducer}