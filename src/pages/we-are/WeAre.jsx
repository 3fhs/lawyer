import React, { useEffect } from 'react';
import "./weAre.css";
import NavBar from '../../componentes/navBar/NavBar';
import Footer from '../../componentes/footer/Footer';
import Title from '../../componentes/title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { infoApiFetch } from '../../redux/apiCalls/infoApiCall';

export default function WeAre() {

  const dispatch = useDispatch();
  const {information} = useSelector(state => state.info)

  useEffect(() => {
    dispatch(infoApiFetch())
  }, [dispatch])

  return (
    <div>
        <NavBar/>
        <section className='sec-form'>
          <Title tit="مكتب الاستاذ / محمد عبد الغنى حسين" des="اتشرف و مكتبى بتقديم الخدمات القانونية فى كافة اعمال المحاماه"/>        
              <div className="about-image">
                <div className='about'>
                  <img src={information.photo} alt={information.office} className='logo-office'/>
                  <div className=''>
                    <h1> {information.office} </h1>
                    <div className='contact-about'>
                      <span> الايميل : {information.email} </span>
                      <span> العنوان : {information.address} </span>
                      <span> التليفون : {information.phone} </span>
                    </div>
                  </div>
                </div>

                <div className="we-are-info">
                  <div className='paragraf'> 
                    <p style={{marginBottom:'10px'}}>{information.about} .</p>
                    
                    <span>  نستعرض فيما يلى الشهادات و الخبرات :- </span> 
                  </div>
                  <ul> 
                    {information.education.map((list, index) => 
                      <li key={index}> {list} </li>
                    )}
                  </ul>
                </div>
              </div>
        </section>
        <Footer/>
    </div>
  )
}
