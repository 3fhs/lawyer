import React, {useEffect} from 'react';
import './kindslaw.css';
import kinds from '../../Data';
import { Link } from 'react-router-dom';
import Title from '../title/Title';
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد ملفات CSS الخاصة بـ AOS

function KindsLaw() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الحركة (بالملي ثانية)
    });
  }, []); // لتفعيل AOS مرة واحدة عند تحميل المكون

  return (
    <section className='law'>
      <Title tit=" الاقسام القانونية " des=" الاقسام القانونية التى يعمل عليها مكتبنا و نقدم خدماتها بكفاءة مهنية عالية "/>
        <div className='law-card'>
            {kinds.lawport.map(law => (
                    <div className='card' key={law.id} data-aos="fade-up">
                        <img src={law.image} alt='logo-icon'/>
                        <h2> {law.الاسم} </h2>
                        <p> {law.قسم} </p>
                        <Link to={`/port/${law.id}`}><i className="bi bi-arrow-right"></i></Link>
                    </div>
            ) 
            )}
        </div>
    </section>
  )
}

export default KindsLaw