import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
    name: "information",
    initialState: {
        information: {
            office: "مكتب الأستاذ / محمد عبد الغنى حسين",
            photo: "/image/me.jpg",
            address: "13 شارع وصفى - فيكتوريا - القاهرة",
            email: "mohamed@gmail.com",
            phone: "01010101010",
            about: "المكتب متخصص فى اعمال المحاماه، و الإجراءات القانونية المختلفة، كما نعمل على تخليص جميع المستندات و الأوراق من كافة المصالح و الهيئات المختلفة. تستطيع التواصل معنا للاستشارات القانونية المختلفة",
            education: [],  // تحويل education إلى مصفوفة
        },
    },
    reducers: {
        setInformation(state, action) {
            state.information = action.payload;
        },
        setEditInfo(state, action) {
            state.information = {
                ...state.information,
                ...action.payload,
            };
        },
        setAddEducation(state, action) {
            // التأكد من أن education مصفوفة قبل استخدام push
            if (Array.isArray(state.information.education)) {
                state.information.education.push(action.payload);
            }
        }
    }
});

const infoActions = infoSlice.actions;
const infoReducer = infoSlice.reducer;

export { infoActions, infoReducer };
