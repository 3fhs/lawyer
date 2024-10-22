import React, { useState } from 'react';
import logo from '../../image/lawyer-logo-two.webp';
import './navBar.css';
import NavLinks from './NavLinks';
import NavLinksTop from './NavLinksTop';


export default function NavBar() {

//open icon list
  const [openList, setOpenList] = useState(false);
  const [openDrop, setOPenDrop] = useState(false);
  

  return (
    <header>
        <div className='nav-header'>
        {openList ?  <i className="bi bi-x-lg" onClick={() => {setOpenList(false) ; setOPenDrop(false)}} ></i> : <i className="bi bi-list" onClick={() => setOpenList(true)} ></i>}
          <div className='all-links'>

            <NavLinksTop/>

            <NavLinks setOPenDrop={setOPenDrop} setOpenList={setOpenList} openDrop={openDrop}  openList={openList}/>

          </div>
          <img src={logo} alt='logo' />
        </div>
    </header>
  )
}
