import React, { useState } from 'react';
import logo from '../../image/lawyer-logo-two.webp';
import './navBar.css';
import NavLinks from './NavLinks';


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

            <NavLinks setOPenDrop={setOPenDrop} setOpenList={setOpenList} openDrop={openDrop}  openList={openList}/>

          </div>
          <img src={logo} alt='logo' />
        </div>
    </header>
  )
}
