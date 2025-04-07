import axios from "axios";
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


const url = import.meta.env.VITE_APP_BACKEND_API_URL;


const autoCompleteAddres = (input,name) => {
    return async (dispatch) => {
        dispatch({ type: FETCHING_LOCATION })
        try {
            const response = await axios.post(`${url}/auto-complete-location`,
                { input: input }
            )
            dispatch({ type: FETCHING_LOCATION_SUCCESSFUL, payload: {name,locations:response?.data} });
        }
        catch (e) {
            dispatch({ type: FETCHING_LOCATION_FAILED, payload: e.message })
        }
    }
}

const setIdRoute = (locationId,name) => {
    return async(dispatch) => {
        dispatch({type:SET_ID_ROUTE_SUCCESSFULL,payload:{name,locationId}})
    }
}
const setLocationRoute = (location,name) => {
    return async(dispatch) => {
        dispatch({type:SET_LOCATION_ROUTE_SUCCESSFULL,payload:{name,location}})
    }
}

const fetchRoute = (locationOne,locationTwo) => {
    return async (dispatch) => {
        dispatch({type:FETCHING_ROUTE})
        try {
            const response = await axios.post(`${url}/getroute`,
                { locationOne, locationTwo }
            )
            dispatch({ type: FETCHING_ROUTE_SUCCESS, payload: response?.data });
        }
        catch (e) {
            dispatch({ type: FETCHING_ROUTE_FAILED, payload: e.message })
        }
    }
}
export { autoCompleteAddres,setIdRoute,setLocationRoute,fetchRoute };