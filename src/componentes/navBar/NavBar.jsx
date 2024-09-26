import React, { useState } from 'react';
import logo from '../../image/lawyer-logo-two.webp';
import './navBar.css';


export default function NavBar() {

//open icon list
  const [openList, setOpenList] = useState(false);

  return (
    <header>
        <div className='nav-header'>
        {openList ?  <i className="bi bi-x-lg" onClick={() => setOpenList(false)} ></i> : <i className="bi bi-list" onClick={() => setOpenList(true)} ></i>}
          <div className='all-links'>
            <ul className='nav-de'>
              <li> <i className="bi bi-telephone"></i>  01010481061 </li>
              <li> <i className="bi bi-envelope"></i> mohamed@gmail.com </li>
              <li> <i className="bi bi-geo-alt"></i> شارع شبرا الدور الاول شقة 1002 </li>
            </ul>
            <ul className='nav-links' style={{clipPath: openList ? "polygon(50% 100%, 100% 75%, 100% 0, 50% 0, 0 0, 0 75%)" : ""}}>
              <li> الرئيسية </li>
              <li> من نحن </li>
              <li> نماذج قضايا </li>
              <li> تواصل معنا </li>
            </ul>
          </div>
          <img src={logo} alt='logo' />
        </div>
    </header>
  )
}
