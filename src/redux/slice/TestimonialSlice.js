import { createSlice } from "@reduxjs/toolkit"


const testimonial= createSlice({
    name: "testimonial",
    initialState: {
        testimonial: [],
    },
    reducers: {
        setTestimonial(state,action) {
            state.testimonial = action.payload;
        },
        addSetTestimonial(state, action) {
            state.testimonial.push(action.payload); // إضافة testimonial الجديدة إلى الـ state
        },
        deleteTestimonial: (state, action) => {
            state.testimonial = state.testimonial.filter(item => item.id !== action.payload);
        }
    }
})

const testiAction = testimonial.actions;
const testiReducer = testimonial.reducer;

export {testiAction, testiReducer};