const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'de6nptyda', // ضع هنا اسم السحابة الخاصة بك
  api_key: '894277293116883',       // ضع هنا مفتاح API الخاص بك
  api_secret: 'OgxMvp06wIoDlAq_qG_ZdcNBUcs'  // ضع هنا السر الخاص بك
});

module.exports = cloudinary;