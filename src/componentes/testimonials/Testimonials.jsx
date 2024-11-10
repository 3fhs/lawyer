import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';
import Title from '../title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { AddTestimonialApiCall, TestimonialApiCall } from '../../redux/apiCalls/TestimonialApiCall';

function Testimonials() {

  const dispatch = useDispatch();
  const {testimonial} = useSelector(state => state.testi)

  useEffect(() => {
    dispatch(TestimonialApiCall());
  }, [dispatch]);

  //add testimonial
  const [newTestimonial, setNewTestimonial] = useState({
    talk: '',
    name: '',
    work: '',
    image: null,
  });

  const handleInputChange = (e) => {     //add every change in input
    const { name, value } = e.target;
    setNewTestimonial(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {     //add every change in input image or file
    setNewTestimonial(prevData => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // توليد id تسلسلي
    const generatedId = testimonial.length + 1;
    
    // إذا كنت تريد رفع الصورة، يمكن رفعها هنا ( مكتبة الصور Cloudinary)
    const formData = {
      talk: newTestimonial.talk,
      name: newTestimonial.name,
      work: newTestimonial.work,
      image: newTestimonial.image,  // الصورة التي ستُرفع إلى Cloudinary
      id: generatedId
  };

    dispatch(AddTestimonialApiCall(formData));
    setNewTestimonial({ talk: '', name: '', work: '', image: null });
  };
  //end add testimonial

  return (
    <div className='testimonials'>
      <Title tit=" اراء بعض العملاء الخاصين بنا " des=" نسعى دائما للتطور و نجتهد للوصول بخدماتنا الى المستوى المرجو منها " />

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {testimonial.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='testimonial'>
              <h2>" {item.talk} "</h2>
              <div className='testi'>
                <span>{item.name}</span>
                <p>{item.work}</p>
              </div>
            </div>
            <img src={item.image} alt='name man' />
          </SwiperSlide>
        ))}
      </Swiper>

        <div className='share-ex'>

          <form className='form-testi'  onSubmit={handleSubmit}>
            <textarea 
              rows={5} 
              cols={50}
              name="talk"
              value={newTestimonial.talk}
              onChange={handleInputChange}
              placeholder="شارك تجربتك"
            >
            </textarea>

            <div className="all-inputs">
              <input 
                type="file"
                id="uploadImage"
                accept="image/*"
                onChange={handleFileChange}
              />

              <input 
                type="text"
                id="name"
                placeholder='ما اسمك؟'
                name="name"
                value={newTestimonial.name}
                onChange={handleInputChange}
              />

              <input 
                type="text"
                id="work"
                placeholder='ما وظيفتك؟'
                name="work"
                value={newTestimonial.work}
                onChange={handleInputChange}
              />

            </div>

            <button type='submit' className='add-testimonials btn-click'>
              <h1> مشاركة تجربتك معنا </h1>
              <AddIcon sx={{color:"#fff", cursor:"pointer", fontSize:'18px'}}/>
            </button>

          </form>
          
        </div>
    </div>
  );
}

export default Testimonials;
