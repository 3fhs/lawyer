import React from 'react';
import './header.css';
import logo from '../../image/lawyer-logo-two.webp';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
        <div className='container'>
            <div className='section-office'>
                <div className='info-office'>
                    <h1> <strong> مكتب الاستاذ / </strong> محمد عبد الغنى حسين </h1>
                    <p> المكتب متخصص فى اعمال المحاماه , و الاجراءات القانونية المختلفة , كما نعمل على تخليص جميع المستندات من كافة المصالح و الهيئات المختلفة , كما تستطيع التواصل معنا للاستشارات القانونية المختلفة </p>
                    <button><Link to="/contact"> تواصل معنا </Link></button>
                </div>
                <img src={logo} alt='logo-office' className='logo-office'/>
            </div>
            <div className='info'>
                <div className='info-name'>
                    <h3> مكتبنا خبرة لاكثر من 30 عاما فى مجال المحاماه  </h3>
                </div>
                <div className='info-name'>
                    <h3> أ / محمد عبد الغنى </h3>
                    <p> المحامى </p>
                </div>
            </div>
        </div>
    </div>
  )
}
