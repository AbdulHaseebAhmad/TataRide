import { combineReducers } from "redux";
import locationReducer from "./google-locations/Reducers"
import formReducer from "./Form/Reducers";

const rootReducer = combineReducers({
    location: locationReducer,
    form: formReducer,
  });

  export default rootReducer;