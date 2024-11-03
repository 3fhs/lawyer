import React, { useEffect, useState } from 'react';
import logo from '../../image/lawyer-logo-two.webp';
import './navBar.css';
import NavLinks from './NavLinks';
import NavLinksMiddle from './NavLinksMiddle';
import NavBarTop from './NavBarTop';
import { useDispatch, useSelector } from 'react-redux';
import { infoApiFetch } from "../../redux/apiCalls/infoApiCall";


export default function NavBar() {

//open icon list
  const [openList, setOpenList] = useState(false);
  const [openDrop, setOPenDrop] = useState(false);

  //call api
  const dispatch = useDispatch();
  const {information} = useSelector(state => state.info);

  useEffect(() => {
    dispatch(infoApiFetch());
  }, [dispatch]);
  

  return (
    <header>
        <NavBarTop/>
        <div className='nav-header'>
        {openList ?  <i className="bi bi-x-lg" onClick={() => {setOpenList(false) ; setOPenDrop(false)}} ></i> : <i className="bi bi-list" onClick={() => setOpenList(true)} ></i>}
          <div className='all-links'>
            <NavLinksMiddle information={information}/>

            <NavLinks setOPenDrop={setOPenDrop} setOpenList={setOpenList} openDrop={openDrop}  openList={openList}/>
          </div>
          <img src={logo} alt='logo' />
        </div>
    </header>
  )
}
