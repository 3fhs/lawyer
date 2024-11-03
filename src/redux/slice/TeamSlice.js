import { createSlice } from "@reduxjs/toolkit";


const teamSlice = createSlice({
    name: "teamSlice",
    initialState: {
        team: [],
    },
    reducers: {
        setTeamSlice(state, action) {
            state.team = action.payload;
        }
    }
});

const teamAction = teamSlice.actions;
const teamReducer = teamSlice.reducer;

export {teamAction, teamReducer};