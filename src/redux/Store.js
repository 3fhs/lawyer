import { configureStore } from "@reduxjs/toolkit";
import { infoReducer } from "./slice/informationSlice";
import { teamReducer } from "./slice/TeamSlice";
import { reportReducers } from "./slice/Report";

const store = configureStore({
    reducer: {
        info: infoReducer,
        team: teamReducer,
        report: reportReducers,
    }
});

export default store;