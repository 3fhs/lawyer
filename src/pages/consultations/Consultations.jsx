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

      <div className='consultations-all'>
        <div className="consultations">
          <form className="consultation-form">
            <input type="text" name="name" placeholder="اكتب اسمك هنا" required/>
            
            <input type="email" name="email" placeholder="اكتب وسيلة التواصل" required/>

            <input type="number" name="phone" placeholder="رقم الواتس" required/>
            
            <select className="consultation-type" required>
              <option value="family"> قانون الأحوال الشخصية </option>
              <option value="business"> القانون التجاري </option>
              <option value="employment"> قانون العمل </option>
              <option value="real-estate"> القانون المدنى </option>
              <option value="real-estate"> القانون الجنائى </option>
              <option value="real-estate"> المخالفات </option>
              <option value="real-estate"> القانون الادارى </option>
            </select>
            
            <textarea name="details" placeholder="اكتب تفاصيل مشكلتك القانونية" rows="5" required></textarea>
            
            <button className='btn-click' type="submit"> أرسال </button>
          </form>
        </div>

        <div className="buying">
          <h1> ثمن الاستشارة </h1>
          <div className="buying-info">
            <div className="buying-check">
              <i className="bi bi-check-circle"></i>
              <span> عليك التسجيل اولا , ثم ملئ الفورم الذى امامك لكى يتم الرد عليك </span>
            </div>
            <button> دفع 200 جنيها </button>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}
