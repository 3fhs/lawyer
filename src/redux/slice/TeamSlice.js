import { createSlice } from "@reduxjs/toolkit";


const teamSlice = createSlice({
    name: "teamSlice",
    initialState: {
        team: [],
    },
    reducers: {
        setTeamSlice(state, action) {
            state.team = action.payload;
        },
        setAddLawyer(state, action) {
            state.team.push(action.payload);
        },
        setRemoveLawyer(state, action) {
            // حذف محامٍ بناءً على الـ id
            const lawyerId = action.payload;
            state.team = state.team.filter(lawyer => lawyer.id !== lawyerId);
        },
        setUpdateLawyer(state, action) {
            // تحديث بيانات محامٍ بناءً على الـ id
            const { id, data } = action.payload;
            const lawyerIndex = state.team.findIndex(lawyer => lawyer.id === id);
            if (lawyerIndex !== -1) {
                state.team[lawyerIndex] = { ...state.team[lawyerIndex], ...data };
            }
        }
    }
});

const teamAction = teamSlice.actions;
const teamReducer = teamSlice.reducer;

export {teamAction, teamReducer};