import { combineReducers } from "redux";
import locationReducer from "./google-locations/Reducers"
import formReducer from "./Form/Reducers";
import dataReducer from "../Store/Data/Reducer";

const rootReducer = combineReducers({
    location: locationReducer,
    form: formReducer,
    data:dataReducer,
  });

  export default rootReducer;