import React from 'react';
import NavBar from '../../componentes/navBar/NavBar';
import Footer from '../../componentes/footer/Footer';
import "./consultations.css";
import Title from "../../componentes/title/Title";

export default function Consultations() {
  return (
    <>
    <NavBar/>
    <section className="sec-form" >
      <Title tit=" وجه الينا استشارتك و سيتم الرد لاحقا "/>
        <div className="consultations">
          <form className="consultation-form">
            <input type="text" name="name" placeholder="اكتب اسمك هنا" required/>
            
            <input type="email" name="email" placeholder="اكتب وسيلة التواصل" required/>

            <input type="number" name="phone" placeholder="رقم الواتس" required/>
            
            <select className="consultation-type" required>
              <option value="family">قانون الأسرة</option>
              <option value="business">القانون التجاري</option>
              <option value="employment">قانون العمل</option>
              <option value="real-estate">قانون العقارات</option>
            </select>
            
            <textarea name="details" placeholder="اكتب تفاصيل مشكلتك القانونية" rows="5" required></textarea>
            
            <button className='btn-click' type="submit"> أرسال </button>
          </form>
        </div>
    </section>
    <Footer/>
    </>
  )
}
