import React, { useEffect } from 'react';
import "./navBar.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { infoApiFetch } from '../../redux/apiCalls/infoApiCall';

function NavBarTop() {

  const dispatch = useDispatch();
  const {information} = useSelector(state => state.info);

  useEffect(() => {
    dispatch(infoApiFetch());
  }, [dispatch])

  return (
    <div className='navbar-top'>
      <img src={information.photo} alt={information.office} />
      <h1> <Link to="/dash-board"> {information.office} </Link></h1>
    </div>
  )
}

export default NavBarTop