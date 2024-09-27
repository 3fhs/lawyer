import React, { useState } from 'react';
import logo from '../../image/lawyer-logo-two.webp';
import './navBar.css';


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
              <li onClick={() => setOpenList(false)}> الرئيسية </li>
              <li onClick={() => setOpenList(false)}> من نحن </li>
              <li onClick={() => setOpenList(false)}> نماذج قضايا </li>
              <li onClick={() => setOpenList(false)}> تواصل معنا </li>
              <li className="dropdown">
                <span className="btn-drop"> اخرى 
                  {openDrop ? <i className="bi bi-caret-up-fill" onClick={() => {setOPenDrop(false) ; setOpenList(false)}}></i> : <i className="bi bi-caret-down-fill" onClick={() => setOPenDrop(true)}></i>}
                  {/* small screen */}
                  {openDrop ? <i className="bi bi-caret-right-fill"  onClick={() => {setOPenDrop(false) ; setOpenList(false)}}></i> : <i className="bi bi-caret-left-fill" onClick={() => setOPenDrop(true)}></i>} 
                 </span>
                <ul className="lists-drop" style={{clipPath: openDrop ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : ""}}>
                  <li className='list-drop' onClick={() => {setOPenDrop(false) ; setOpenList(false)}} > الاستشارات </li>
                  <li className='list-drop' onClick={() => {setOPenDrop(false) ; setOpenList(false)}} > صيغ العقود </li>
                </ul>
              </li>
            </ul>
          </div>
          <img src={logo} alt='logo' />
        </div>
    </header>
  )
}
