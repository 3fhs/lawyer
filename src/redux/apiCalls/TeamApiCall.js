import axios from "axios"
import { teamAction } from "../slice/TeamSlice";
import { uploadImageToCloudinary } from "./UploadingCloudinary";


export function teamApi() {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:5000/team");
            dispatch(teamAction.setTeamSlice(response.data))
        } catch (error) {
            console.log("error here", error);
        }
    }
}

export function addLawyerApiWithImage(formData) {
    return async (dispatch) => {
        try {
            // رفع الصورة إلى Cloudinary والحصول على رابط الصورة
            const imageResponse = await uploadImageToCloudinary(formData.get('image'));

            // التحقق من وجود secure_url في استجابة Cloudinary
            if (imageResponse && imageResponse.secure_url) {
                console.log("Cloudinary secure_url:", imageResponse.secure_url);

                // إضافة رابط الصورة إلى formData
                formData.set('image', imageResponse.secure_url);

                // طباعة محتويات formData للتأكد
                for (let [key, value] of formData.entries()) { 
                    console.log(`${key}: ${value}`);
                }

                // إرسال formData إلى السيرفر
                const response = await axios.post("http://localhost:5000/team", formData, {
                    headers: { "Content-Type": "multipart/form-data" }
                });

                console.log("API response:", response.data);
                dispatch(teamAction.setAddLawyer(response.data));
            } else {
                console.error("Invalid Cloudinary response: Missing secure_url", imageResponse);
            }
        } catch (error) {
            console.error("Error adding lawyer with image:", error);
        }
    };
}


export function updateLawyerApiWithImage(id, formData) {
    return async (dispatch) => {
        try {
            // تحقق إذا كان هناك صورة جديدة
            if (formData.get('image')) {
                const imageUrl = await uploadImageToCloudinary(formData.get('image'));
                formData.set('image', imageUrl); // تعيين رابط الصورة الجديدة
            }

            // إرسال البيانات المحدثة إلى السيرفر
            const response = await axios.put(`http://localhost:5000/team/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            dispatch(teamAction.setUpdateLawyer({ id, data: response.data }));
        } catch (error) {
            console.log("Error updating lawyer with image:", error);
        }
    };
}


export function deleteLawyerApi(id) {
    return async (dispatch) => {
        try {
            await axios.delete(`http://localhost:5000/team/${id}`);
            dispatch(teamAction.setRemoveLawyer(id));
        } catch (error) {
            console.error("Error deleting member:", error);
        }
    };
}