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

                // إعداد البيانات لارسالها بتنسيق JSON
                const lawyerData = {
                    name: formData.get('name'),
                    work: formData.get('work'),
                    deg: formData.get('deg'),
                    image: imageResponse.secure_url,  // استخدام رابط الصورة من Cloudinary
                };

                // إرسال البيانات إلى السيرفر
                const response = await axios.post("http://localhost:5000/team", lawyerData, {
                    headers: { "Content-Type": "application/json" }
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
            let imageUrl = formData.get('image');

            // التحقق إذا كانت هناك صورة جديدة
            if (imageUrl) {
                const imageResponse = await uploadImageToCloudinary(imageUrl);

                // تحقق من وجود secure_url في الاستجابة
                if (imageResponse && imageResponse.secure_url) {
                    imageUrl = imageResponse.secure_url;
                } else {
                    console.error("Cloudinary response missing secure_url", imageResponse);
                    return; // إنهاء الدالة إذا لم تتوفر الصورة
                }
            }

            // إعداد كائن البيانات لإرساله كـ JSON
            const updatedMemberData = {
                name: formData.get('name'),
                work: formData.get('work'),
                deg: formData.get('deg'),
                image: imageUrl, // استخدام رابط الصورة المحدث
            };

            // إرسال البيانات إلى السيرفر
            const response = await axios.put(`http://localhost:5000/team/${id}`, updatedMemberData, {
                headers: { "Content-Type": "application/json" }
            });
            
            // التأكد من استجابة السيرفر
            console.log("Update response:", response.data);
            dispatch(teamAction.setUpdateLawyer({ id, data: response.data }));
        } catch (error) {
            console.error("Error updating lawyer with image:", error);
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