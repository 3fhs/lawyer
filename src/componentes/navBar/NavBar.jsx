import React, { useState } from 'react';
import logo from '../../image/lawyer-logo-two.webp';
import './navBar.css';
import { Link } from 'react-router-dom';


export default function NavBar() {

//open icon list
  const [openList, setOpenList] = useState(false);
  const [openDrop, setOPenDrop] = useState(false);


  return (
    <header>
        <div className='nav-header'>
        {openList ?  <i className="bi bi-x-lg" onClick={() => {setOpenList(false) ; setOPenDrop(false)}} ></i> : <i className="bi bi-list" onClick={() => setOpenList(true)} ></i>}
          <div className='all-links'>
            <ul className='nav-de'>
              <li> <i className="bi bi-telephone"></i>  01010481061 </li>
              <li> <i className="bi bi-envelope"></i> mohamed@gmail.com </li>
              <li> <i className="bi bi-geo-alt"></i> شارع شبرا الدور الاول شقة 1002 </li>
            </ul>
            <ul className='nav-links' style={{clipPath: openList ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : ""}}>
              <Link to="/" onClick={() => setOpenList(false)}> الرئيسية </Link>
              <Link to="/we-are" onClick={() => setOpenList(false)}> من نحن </Link>
              <Link to="/write" onClick={() => setOpenList(false)}> نماذج و صيغ قانونية </Link>
              <Link to="/contact" onClick={() => setOpenList(false)}> تواصل معنا </Link>
              <li className="dropdown">
                <span className="btn-drop"> اخرى 
                  {openDrop ? <i className="bi bi-caret-up-fill" onClick={() => setOPenDrop(false)}></i> : <i className="bi bi-caret-down-fill" onClick={() => setOPenDrop(true)}></i>}
                  {/* small screen */}
                  {openDrop ? <i className="bi bi-caret-right-fill"  onClick={() => setOPenDrop(false)}></i> : <i className="bi bi-caret-left-fill" onClick={() => setOPenDrop(true)}></i>} 
                 </span>
                <ul className="lists-drop" style={{clipPath: openDrop ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : ""}}>
                  <Link to="/consultations" className='list-drop' onClick={() => {setOPenDrop(false) ; setOpenList(false)}} > الاستشارات </Link>
                  <Link to="/login" className='list-drop' onClick={() => {setOPenDrop(false) ; setOpenList(false)}} > تسجيل الدخول </Link>
                </ul>
              </li>
            </ul>
          </div>
          <img src={logo} alt='logo' />
        </div>
    </header>
  )
}
