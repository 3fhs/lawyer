import React, {useEffect} from 'react';
import './report.css';
import { Link } from 'react-router-dom';
import Title from '../title/Title';
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد ملفات CSS الخاصة بـ AOS
import { useDispatch, useSelector } from 'react-redux';
import { reportApi } from '../../redux/apiCalls/ReportApiCall';

function ReportSection() {

  const dispatch = useDispatch();
  const {report} = useSelector(state => state.report);
  
  useEffect(() => {
    dispatch(reportApi())
  }, [dispatch])

  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الحركة (بالملي ثانية)
    });
  }, []); // لتفعيل AOS مرة واحدة عند تحميل المكون

  return (
    <section className='law'>
      <Title tit=" التقارير و الابحاث و النماذج " des=" بعض التقارير و الابحاث و النماذج "/>
        <div className='law-card'>
            {report.map(law => (
                    <div className='card' key={law.id} data-aos="fade-up">
                        <img src={law.image} alt='logo-section'/>
                        <h2> {law.name} </h2>
                        <p> {law.port.slice(0,100)}... </p>
                        <Link to={`/report/${law.id}`}><i className="bi bi-arrow-right"></i></Link>
                    </div>
            ) 
            )}
        </div>
    </section>
  )
}

export default ReportSection;