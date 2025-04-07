import { SET_TIME, SET_DATE,SET_FARE } from "./Constants"

const initialState = {
    rideDate: new Date().toISOString(),
    rideTime: new Date().toTimeString().split(' ')[0],
    rideFare:0,
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TIME:
            return {
                ...state,
                rideTime: action.payload,
            };
        case SET_DATE:
            return {
                ...state,
                rideDate: action.payload,
            }; 
        case SET_FARE:
            return {
                ...state,
                rideFare: action.payload,
            };
        default:
            return state;
    }
};

export default formReducer;