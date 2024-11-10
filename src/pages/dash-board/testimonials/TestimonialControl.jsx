import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTestimonialApiCall, TestimonialApiCall } from '../../../redux/apiCalls/TestimonialApiCall';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../../../componentes/testimonials/testimonials.css";

function TestimonialControl() {
    const dispatch = useDispatch();
    const {testimonial} = useSelector(state => state.testi);

    useEffect(() => {
        dispatch(TestimonialApiCall());
    }, [dispatch]);

    const handleDelete = (id) => {
      dispatch(deleteTestimonialApiCall(id));
    };

  return (
    <div style={{height:'calc(100vh - 112px)'}}>
      <div style={{width:'100%', marginBottom:'50px'}}>
        <h1 style={{fontSize:'30px', textAlign:'center', background:'#909090', borderRadius:'4px', padding:'10px'}}>
           التحكم فى التجارب المشاركة 
        </h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{width:'100%', maxWidth:'1000px', maxHeight:'360px'}}
      >
        {testimonial.map((item) => (
          <SwiperSlide key={item.id} style={{flexDirection:'row-reverse', position:"relative"}}>
            <div className='testimonial' style={{height:'320px'}}>
              <h2>" {item.talk} "</h2>
              <div className='testi'>
                <span>{item.name}</span>
                <p>{item.work}</p>
              </div>
            </div>
            <img src={item.image} alt='name man' style={{height:'360px'}} />

            <button 
              className='btn-click red' 
              style={{position:'absolute', top:'5px',  right:'5px',  letterSpacing:'1px'}}
              onClick={() => handleDelete(item.id)}  
              >
                 حذف تلك التجربة 
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialControl