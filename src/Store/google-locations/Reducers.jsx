import {
    FETCHING_LOCATION,
    FETCHING_LOCATION_SUCCESSFUL,
    FETCHING_LOCATION_FAILED,
    SET_ID_ROUTE_SUCCESSFULL,
    SET_LOCATION_ROUTE_SUCCESSFULL,
    FETCHING_ROUTE,
    FETCHING_ROUTE_SUCCESS,
    FETCHING_ROUTE_FAILED
} from "./Constants"

const initialState = {
    loading: false,
    data: {},
    error: false,
    message: "",
    locationRoute: {},
    idRoute: {},
    routeData: {}
};



const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_LOCATION:
            return {
                ...state,
                loading: true,
                error: false,
                message: FETCHING_LOCATION,
            };

        case FETCHING_LOCATION_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                data: { ...state.data, [action.payload.name]: action.payload.locations },
                message: FETCHING_LOCATION_SUCCESSFUL,
            };

        case FETCHING_LOCATION_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                message: FETCHING_LOCATION_FAILED,
            };

        case FETCHING_ROUTE:
            return {
                ...state,
                loading: true,
                error: false,
                message: FETCHING_ROUTE
            };
        case FETCHING_ROUTE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                message: FETCHING_ROUTE_SUCCESS,
                routeData: { ...state.routeData, ...[action.payload] }
            };
        case FETCHING_ROUTE_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                message: FETCHING_ROUTE_FAILED,
                routeData: {}
            };



        case SET_ID_ROUTE_SUCCESSFULL:
            return {
                ...state,
                loading: false,
                message: SET_ID_ROUTE_SUCCESSFULL,
                idRoute: { ...state.idRoute, [action.payload.name]: action.payload.locationId }
            };
        case SET_LOCATION_ROUTE_SUCCESSFULL:
            return {
                ...state,
                loading: false,
                message: SET_LOCATION_ROUTE_SUCCESSFULL,
                locationRoute: { ...state.locationRoute, [action.payload.name]: action.payload.locationId }
            }
        default:
            return state;
    }
};

export default locationReducer;