import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import kinds from '../../Data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

function Testimonials() {
  return (
    <div className='testimonials'>
      <h1 className='title'> اراء بعض من عملائنا </h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {kinds.testi.map((item) => (
          <SwiperSlide key={item.id}> {/* أضف مفتاح فريد */}
            <img src={item.image} alt='name man' />
            <div className='testimonial'>
              <h2>" {item.talk} "</h2>
              <div className='testi'>
                <span>{item.name}</span>
                <p>{item.work}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
