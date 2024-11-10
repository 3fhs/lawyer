const cloudinary = require('cloudinary').v2;
require('dotenv').config(); // تحميل متغيرات البيئة من ملف .env

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME, // ضع هنا اسم السحابة الخاصة بك
  api_key: CLOUDINARY_API_KEY,       // ضع هنا مفتاح API الخاص بك
  api_secret: CLOUDINARY_API_SECRET  // ضع هنا السر الخاص بك
});

console.log('Cloudinary Cloud Name:', process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
console.log('Cloudinary API Key:', process.env.REACT_APP_CLOUDINARY_API_KEY);
console.log('Cloudinary API Secret:', process.env.REACT_APP_CLOUDINARY_API_SECRET);

module.exports = cloudinary;