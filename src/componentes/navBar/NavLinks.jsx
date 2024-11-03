import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./navBar.css";

export default function NavLinks({ setOPenDrop, setOpenList, openDrop, openList }) {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  // ضبط الرابط النشط بناءً على الموقع الحالي
  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <ul className='nav-links' style={{ clipPath: openList ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "" }}>
      <Link 
        to="/" 
        onClick={() => { setOpenList(false); setActiveLink('/'); }}
        className={activeLink === '/' ? 'active' : ''}
      >
        الرئيسية 
      </Link>
      <Link 
        to="/we-are" 
        onClick={() => { setOpenList(false); setActiveLink('/we-are'); }}
        className={activeLink === '/we-are' ? 'active' : ''}
      >
        من نحن 
      </Link>

      <Link 
            to="/consultations" 
            className={activeLink === '/consultations' ? 'active' : ''} 
            onClick={() => {setOpenList(false); setActiveLink('/consultations'); }}
          >
            الاستشارات
      </Link>

      <Link 
        to="/contact" 
        onClick={() => { setOpenList(false); setActiveLink('/contact'); }}
        className={activeLink === '/contact' ? 'active' : ''}
      >
        تواصل معنا 
      </Link>
      <Link 
            to="/login" 
            className={`dropdown ${activeLink === '/login' ? 'active' : ''}`} 
            onClick={() => { setOPenDrop(false); setOpenList(false); setActiveLink('/login'); }}
      >
            تسجيل الدخول
      </Link>
      {/* <li className="dropdown">
        <div className="btn-drop">
          <span> أخرى </span>
          {openDrop ? <i className="bi bi-caret-up-fill" onClick={() => setOPenDrop(false)}></i> : <i className="bi bi-caret-down-fill" onClick={() => setOPenDrop(true)}></i>}
          {openDrop ? <i className="bi bi-caret-right-fill" onClick={() => setOPenDrop(false)}></i> : <i className="bi bi-caret-left-fill" onClick={() => setOPenDrop(true)}></i>}
        </div>
        <ul className="lists-drop" style={{ clipPath: openDrop ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "" }}>
          <Link 
            to="/write" 
            onClick={() => { setOPenDrop(false); setOpenList(false); setActiveLink('/write'); }}
            className={`list-drop ${activeLink === '/write' ? 'active' : ''}`}
          >
            نماذج و صيغ قانونية 
          </Link>
          <i className="bi bi-arrow-return-right" onClick={() => setOPenDrop(false)}></i>
        </ul>
      </li> */}
    </ul>
  );
}
