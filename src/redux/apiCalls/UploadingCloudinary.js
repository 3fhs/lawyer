import axios from "axios";

export const uploadImageToCloudinary = async (imageFile) => {
    const formData = new FormData();
    formData.append('file', imageFile);  // تأكد من أنك تمرر الكائن File
    formData.append('upload_preset', 'image1'); // استخدام preset خاص بك من Cloudinary

    try {
        const response = await axios.post('https://api.cloudinary.com/v1_1/de6nptyda/image/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // تأكد من أنك تستخدم Content-Type الصحيح
            }
        });
        return response.data; // سيتم إرجاع البيانات من Cloudinary
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        throw error;
    }
};