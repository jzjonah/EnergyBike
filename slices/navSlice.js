import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    origin: null,
    destination: null,
    travelTimeInformation:null,
    clicked:null,
    oldDestination:null
}

export const navSlice = createSlice({
    name:"nav",
    initialState,
    reducers:{
        setOrigin:(state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) =>{
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
        setClicked:(state, action) => {
            state.clicked = action.payload
        },
        setOldDestination: (state, action) => {
            state.oldDestination = action.payload;
        },
        setCurrent: (state, action) => {
            state.current = action.payload;
        },
        
        
    },
});


export const { setOrigin, setOldDestination, setCurrent,setDestination,setClicked, setTravelTimeInformation} = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const selectClicked = (state) => state.nav.clicked;
export const selectOldDestination = (state) => state.nav.oldDestination;
export const selectCurrent = (state) => state.nav.current;


export default navSlice.reducer;