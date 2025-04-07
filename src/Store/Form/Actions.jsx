import { SET_TIME ,SET_DATE, SET_FARE} from "./Constants"


const setTime = (time) => {
    return async (dispatch) => {
        dispatch({type:SET_TIME,payload:time})
    }
}
const setDate = (time) => {
    return async (dispatch) => {
        dispatch({type:SET_DATE,payload:time})
    }
}
const setfare = (fare) => {
    return async (dispatch) => {
        dispatch({type:SET_FARE,payload:fare})
    }
}

export {setDate,setTime,setfare};