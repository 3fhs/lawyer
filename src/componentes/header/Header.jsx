import React, { useEffect } from 'react';
import './header.css';
import logo from '../../image/lawyer-logo-two.webp';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { infoApiFetch } from '../../redux/apiCalls/infoApiCall';

export default function Header() {

    const dispatch = useDispatch();
    const {information} = useSelector(state => state.info)

    useEffect(() => {
        dispatch(infoApiFetch());
    }, [dispatch])

  return (
    <div className='header'>
        <div className='container'>
            <div className='section-office'>
                <div className='info-office'>
                    <h1> {information.office} </h1>
                    <p> {information.about} </p>
                    <button className='btn-click'><Link to="/contact"> تواصل معنا </Link></button>
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
