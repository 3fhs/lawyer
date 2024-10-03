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
import Title from '../title/Title';

function Testimonials() {
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
        {kinds.testi.map((item) => (
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
    </div>
  );
}

export default Testimonials;
