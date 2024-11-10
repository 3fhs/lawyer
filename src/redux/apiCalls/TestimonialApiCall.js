import axios from "axios"
import { testiAction } from "../slice/TestimonialSlice"


export function TestimonialApiCall() {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:5000/testimonial")
            dispatch(testiAction.setTestimonial(response.data))
        }
        catch (error) {
            console.log("error", error)
        }
    }
}

//add testimonial 
export function AddTestimonialApiCall(newTestimonial) {
    return async (dispatch) => {
        try {
            // رفع الصورة إلى Cloudinary
            const formData = new FormData();
            formData.append("file", newTestimonial.image);
            formData.append("upload_preset", 'image1'); // قم بإنشاء upload preset في Cloudinary إذا لم تكن قد أنشأته.

            const cloudinaryResponse = await axios.post(`https://api.cloudinary.com/v1_1/de6nptyda/image/upload`, formData ,
                {
                    headers: {
                        "Content-Type": "multipart/form-data", // للتأكد من أن المحتوى هو FormData
                    }
                }
            );

            // إضافة رابط الصورة المرفوعة إلى testimonial
            const testimonialData = {
                ...newTestimonial,
                image: cloudinaryResponse.data.secure_url, // رابط الصورة في Cloudinary
            };

            // إرسال testimonial إلى الخادم مع رابط الصورة
            const response = await axios.post("http://localhost:5000/testimonial", testimonialData);
            dispatch(testiAction.addSetTestimonial(response.data));
        } catch (error) {
            console.log("Error adding testimonial:", error);
        }
    };
}

//delete any testimonial
export const deleteTestimonialApiCall = (id) => async (dispatch) => {
    try {
      await axios.delete(`http://localhost:5000/testimonial/${id}`);
      dispatch(testiAction.deleteTestimonial(id)); // تحديث Redux state بعد الحذف
    } catch (error) {
      console.error("Failed to delete testimonial:", error);
    }
};