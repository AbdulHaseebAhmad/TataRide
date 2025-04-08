import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  "pick-up": "",
  "drop-off":"",
  "name":"",
  "phone":"",
  "drivers-note":"",
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setDriveNote: (state,action) => {
        state['drivers-note'] = action.payload;
    },
    setPickUp: (state,action) => {
        state['pick-up'] = action.payload
    },
    setDropOff: (state,action) => {
        state['drop-off'] = action.payload;
     },
    setPhone: (state, action) => {
        state.phone = action.payload
    },
    setName: (state, action) => {
        state.name = action.payload
    },
  },
});

export const { setDriveNote, setPickUp, setDropOff, setPhone,setName } = dataSlice.actions;

export default dataSlice.reducer;