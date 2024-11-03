import React, { useEffect } from 'react';
import './footer.css';
import logo from '../../image/lawyer-logo-two.webp';
import { useDispatch, useSelector } from 'react-redux';
import { infoApiFetch } from '../../redux/apiCalls/infoApiCall';

export default function Footer() {

    const dispatch = useDispatch();
    const {information} = useSelector(state => state.info)

    useEffect(() => {
        dispatch(infoApiFetch())
    }, [dispatch])

  return (
    <div className='footer'>
        <div className="footer-count">
            <div className="footer-slice">
                <img src={logo} alt='logo-site' />
                <p> يتشرف مكتبنا بخدمة حضراتكم فى كافة النواحى القانونية و الاعمال الادارية و كتابة العقود و المساعدة القضائية و كل ما يخص اعمال المحاماه , و نسال الله العلى القدير ان يوفقنا  </p>
                <ul className='footer-links'>
                    <li><i className="bi bi-facebook"></i></li>
                    <li><i className="bi bi-whatsapp"></i></li>
                    <li><i className="bi bi-messenger"></i></li>
                    <li><i className="bi bi-twitter"></i></li>
                </ul>
            </div>
            <div className="footer-slice">
            <ul className='footer-addres'>
                <li> 
                    <i className="bi bi-envelope"></i>
                    <h3>: Email</h3> 
                    <p> {information.email} </p>
                </li>
                <li> 
                    <i className="bi bi-telephone"></i> 
                    <h3>: Phone</h3> 
                    <p> {information.phone} </p>
                </li>
                <li> 
                    <i className="bi bi-geo-alt"></i>
                    <h3>: Our Office</h3> 
                    <p> {information.address} </p>
                </li>
            </ul>
            </div>
        </div>
        <div className="copy">
            <p> Copyright @ 2024, Mohamed Abd-Elghany Lawyer </p>
        </div>
    </div>
  )
}
