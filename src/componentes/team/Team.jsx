import React, {useEffect} from 'react';
import './team.css';
import kinds from '../../Data';
import { Link } from 'react-router-dom';
import Title from "../title/Title";
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد ملفات CSS الخاصة بـ AOS

export default function Team() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الحركة (بالملي ثانية)
    });
  }, []); // لتفعيل AOS مرة واحدة عند تحميل المكون

  return (
    <div className='team'>
      <Title tit=" السادة اعضاء المكتب " />
        <div className='team-card'>
            {kinds.team.map(lawyer => (
                    <div className='card' key={lawyer.id} data-aos="fade-right">
                        <Link to={`/team/${lawyer.id}`}>
                           <img src={lawyer.image} alt='logo-icon'/>
                        </Link>
                        <h2> أ / {lawyer.name} </h2>
                        <p> {lawyer.work} </p>
                        <div className='icon'>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                    </div>
            ) 
            )}
        </div>
    </div>
  )
}
