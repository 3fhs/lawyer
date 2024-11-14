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
            to="/login" 
            className={`dropdown ${activeLink === '/login' ? 'active' : ''}`} 
            onClick={() => { setOPenDrop(false); setOpenList(false); setActiveLink('/login'); }}
      >
            تسجيل الدخول
      </Link>
    </ul>
  );
}
