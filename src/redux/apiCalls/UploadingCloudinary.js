import axios from "axios";

export async function uploadImageToCloudinary(imageFile) {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "image1");

    try {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/de6nptyda/image/upload`, formData, {
            headers: {
                "Content-Type": "multipart/form-data", // للتأكد من أن المحتوى هو FormData
            }
        });
        
        console.log("Cloudinary Response: ", response.data); // تأكد من أن البيانات تُرسل وتستقبل بشكل صحيح
        return response.data.secure_url; // رابط الصورة المرفوعة
    } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        throw error;
    }
}