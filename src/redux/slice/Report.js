import { createSlice } from "@reduxjs/toolkit";


const reportSlice = createSlice({
    name: "reportSlice",
    initialState:{
        report: [],
    },
    reducers:{
        setReport(state, action) {
            state.report = action.payload;
        }
    }
});

const reportAction = reportSlice.actions;
const reportReducers = reportSlice.reducer;

export {reportAction, reportReducers};