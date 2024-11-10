import axios from "axios";
import { infoActions } from "../slice/informationSlice";

// Fetch data
export function infoApiFetch() {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:5000/information");
            dispatch(infoActions.setInformation(response.data));
        } catch (error) {
            console.error("Error fetching information:", error);
        }
    };
};

// Update information
export function infoApiUpdate(data) {
    return async (dispatch) => {
        try {
            const dataToSend = {};
            data.forEach((value, key) => {
                dataToSend[key] = value;
            });

            // تأكد من أن التعليم يتم إرساله كمصفوفة
            if (dataToSend.education) {
                dataToSend.education = JSON.parse(dataToSend.education);
            }

            console.log("Data to send as JSON:", dataToSend);
            const response = await axios.put("http://localhost:5000/information", dataToSend);

            console.log("Server response:", response.data);
            dispatch(infoActions.setInformation(response.data));
        } catch (error) {
            console.error("Error in infoApiUpdate:", error);
            if (error.response) {
                console.log("Server response status:", error.response.status);
                console.log("Server response data:", error.response.data);
            }
        }
    };
}
//update before update information
export const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'image1'); // تأكد من تعيين upload preset في Cloudinary

    try {
        const response = await axios.post('https://api.cloudinary.com/v1_1/de6nptyda/image/upload', formData);
        return response.data; // سترجع لك بيانات الصورة المحملة
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error; // ارفع الخطأ للتعامل معه لاحقًا
    }
};
