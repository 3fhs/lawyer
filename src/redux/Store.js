import { configureStore } from "@reduxjs/toolkit";
import { infoReducer } from "./slice/informationSlice";
import { teamReducer } from "./slice/TeamSlice";
import { reportReducers } from "./slice/Report";
import { testiReducer } from "./slice/TestimonialSlice";

const store = configureStore({
    reducer: {
        info: infoReducer,
        testi: testiReducer,
        team: teamReducer,
        report: reportReducers,
    }
});

export default store;