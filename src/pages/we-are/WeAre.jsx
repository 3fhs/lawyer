import React from 'react';
import "./weAre.css";
import NavBar from '../../componentes/navBar/NavBar';
import Footer from '../../componentes/footer/Footer';
import logo from '../../image/lawyer-logo-two.webp';
import Title from '../../componentes/title/Title';

export default function WeAre() {
  return (
    <div>
        <NavBar/>
        <section>
          <Title tit="مكتب الاستاذ / محمد عبد الغنى حسين" des="اتشرف و مكتبى بتقديم الخدمات القانونية فى كافة اعمال المحاماه"/>
            <div className="we-are">
              <img src={logo} alt="logo office" className='logo-office'/>
              <div className="we-are-info">
                <h1> <strong> مكتب الاستاذ / </strong> محمد عبد الغنى حسين </h1>
                <p> المكتب متخصص فى اعمال المحاماه , و الاجراءات القانونية المختلفة 
                  , كما نعمل على تخليص جميع المستندات من كافة المصالح و الهيئات المختلفة 
                  , كما تستطيع التواصل معنا للاستشارات القانونية المختلفة 
                </p>
                <ul> 
                  <li> حاصل على ليسانس الحقزق من جامعة عين شمس </li>
                  <li> تدرب فى مكاتب عديدة </li>
                  <li> عمل فى مختلف المجالات القانونية </li>
                </ul>
              </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}
