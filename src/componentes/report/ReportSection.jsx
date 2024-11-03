import React, {useEffect} from 'react';
import './report.css';
import kinds from '../../Data';
import { Link } from 'react-router-dom';
import Title from '../title/Title';
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد ملفات CSS الخاصة بـ AOS

function ReportSection() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الحركة (بالملي ثانية)
    });
  }, []); // لتفعيل AOS مرة واحدة عند تحميل المكون

  return (
    <section className='law'>
      <Title tit=" التقارير و الابحاث و النماذج " des=" بعض التقارير و الابحاث و النماذج "/>
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

export default ReportSection;