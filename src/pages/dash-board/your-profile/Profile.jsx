import React, { useEffect, useState } from 'react';
import "./profile.css";
import { useDispatch, useSelector } from 'react-redux';
import { infoApiFetch, infoApiUpdate, uploadImageToCloudinary } from '../../../redux/apiCalls/infoApiCall';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
  const dispatch = useDispatch();
  const { information } = useSelector(state => state.info);

  const [formData, setFormData] = useState({
    office: '',
    photo: null,
    address: '',
    email: '',
    phone: '',
    about: '',
    education: [],
    newEducation: '' // To handle new education entry
  });

  useEffect(() => {
    dispatch(infoApiFetch());
  }, [dispatch]);

  useEffect(() => {
    if (information) {
      setFormData(prevData => ({
        ...prevData,
        office: information.office || '',
        photo: information.photo || null,
        address: information.address || '',
        email: information.email || '',
        phone: information.phone || '',
        about: information.about || '',
        education: information.education || [],
      }));
    }
  }, [information]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEducationChange = (e) => {
    const { value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      newEducation: value,
    }));
  };

  const addEducation = () => {
    if (formData.newEducation.trim() !== '') {
      setFormData(prevData => ({
        ...prevData,
        education: [...prevData.education, prevData.newEducation],
        newEducation: '', // Clear input after adding
      }));
    }
  };

  const removeEducation = (index) => {
    setFormData(prevData => ({
      ...prevData,
      education: prevData.education.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit = new FormData();
    dataToSubmit.append("office", formData.office);

    // رفع الصورة إلى Cloudinary
    if (formData.photo) {
        try {
            const cloudinaryResponse = await uploadImageToCloudinary(formData.photo);
            dataToSubmit.append("photo", cloudinaryResponse.secure_url); // استخدام الرابط الآمن
        } catch (error) {
            console.error('Error uploading image:', error);
            toast.error('حدث خطأ أثناء رفع الصورة'); // إشعار الخطأ
            return; // أوقف تنفيذ الدالة إذا حدث خطأ في رفع الصورة
        }
    } else {
        dataToSubmit.append("photo", information.photo); // إذا لم يتم اختيار صورة جديدة، استخدم الصورة الحالية
    }

    dataToSubmit.append("address", formData.address);
    dataToSubmit.append("email", formData.email);
    dataToSubmit.append("phone", formData.phone);
    dataToSubmit.append("about", formData.about);

    // أضف التعليم كمصفوفة JSON
    dataToSubmit.append("education", JSON.stringify(formData.education));

    // Log FormData content
    for (let pair of dataToSubmit.entries()) {
        console.log(pair[0], pair[1]);
    }

    // Dispatch action to update info
    try {
        await dispatch(infoApiUpdate(dataToSubmit)); // تأكد من أن `infoApiUpdate` ترجع Promise
        toast.success('تم تعديل البيانات بنجاح!'); // إشعار النجاح
    } catch (error) {
        console.error('Error updating info:', error);
        toast.error('حدث خطأ أثناء تعديل البيانات'); // إشعار الخطأ
    }
};



  return (
    <div className='profile'>
      <div style={{display:'flex', alignItems:'center',justifyContent:'center', gap:'10px', width:'100%', flexDirection:'row-reverse'}}>
        <h1>تعديل بيانات المكتب</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='profile-office'>
          <div className='co-index'>
            <label>اسم المكتب</label>
            <input type="text" name="office" value={formData.office} onChange={handleChange} />
          </div>

          <div className='co-index'>
            <label>صورة المكتب</label>
            <input type="file" name="photo" onChange={(e) => setFormData({ ...formData, photo: e.target.files[0] })} />
          </div>
        </div>

        <div className='profile-address'>
          <div className='co-index'>
            <label>العنوان</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <div className='co-index'>
            <label>البريد الإلكتروني</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className='co-index'>
            <label>رقم الهاتف</label>
            <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
        </div>

        <div className='education'>
          <div className='co-index co-text'>
            <label>الوصف</label>
            <textarea name="about" value={formData.about} onChange={handleChange} />
          </div>
          
          <div className='co-index co-text todo'>
            <label>التعليم والخبرات</label>
            <div style={{ display: 'flex', alignItems: 'center',width:'100%', background:'#fff', borderRadius:'6px', overflow:'hidden', justifyContent:'end' }}>
              <input
                style={{borderRight:'2px solid #9994', boxShadow:'none', borderRadius:'0'}}
                type="text"
                placeholder="أضف التعليم والخبرة"
                value={formData.newEducation}
                onChange={handleEducationChange}
              />
              <AddIcon sx={{ color: "#1f9fff", cursor: "pointer" , margin:'10px'}} onClick={addEducation} />
            </div>

            <ul className='todo-list'>
              {formData.education.map((edu, index) => (
                <li key={index}>
                  {edu}
                  <RemoveIcon sx={{ color: "red", cursor: "pointer" }} onClick={() => removeEducation(index)} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button className='btn-click ' type="submit">حفظ التعديلات</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Profile;
